// FILE: src/lib/shopify.ts (REPLACE ENTIRE FILE)

import { Product, ShopifyProduct } from '@/types';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

async function shopifyRequest(query: string) {
  const URL = `https://${domain}/api/2024-04/graphql.json`;

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 * 60 } // Revalidate data every hour
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Shopify API request failed: ${response.status} ${response.statusText}\n${errorBody}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making Shopify API request:', error);
    return { error: 'Shopify API request failed.', details: error instanceof Error ? error.message : String(error) };
  }
}

// Helper function to format the raw Shopify product data into our simpler Product type
function formatProduct(product: ShopifyProduct): Product {
    const {
      handle,
      title,
      description,
      vendor,
      tags,
      productType,
      priceRange,
      images
    } = product;
  
    const imageUrl = images.edges[0]?.node.url || '/images/placeholder.jpg';
  
    const specs: Product['specs'] = {};
    const warrantyTag = tags.find(tag => tag.toLowerCase().startsWith('warranty:'));
    
    tags.forEach(tag => {
      if (tag.toLowerCase().startsWith('spec:')) {
        const parts = tag.split(':');
        if (parts.length === 2) {
          const specParts = parts[1].match(/(\d+)(\w+)/);
          if (specParts && specParts.length === 3) {
            specs[specParts[2].toLowerCase() as keyof Product['specs']] = specParts[1];
          }
        }
      }
    });
  
    return {
      id: handle,
      name: title,
      description: description || '',
      brand: vendor,
      category: [],
      type: productType ? [productType] : [],
      price: parseFloat(priceRange.minVariantPrice.amount),
      imageUrl: imageUrl,
      warranty: warrantyTag ? warrantyTag.split(':')[1].trim() : 'Standard Warranty',
      stock_status: 'In Stock',
      tags: tags,
      // FIX: Ensure specs is always included to match the interface
      specs: specs 
    };
}
  

export async function getAllProducts() {
  const query = `
    {
      products(first: 250) {
        edges {
          node {
            handle
            title
            description
            vendor
            tags
            productType
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;
  const response = await shopifyRequest(query);

  if (response.error || !response.data?.products) {
    return [];
  }

  const products = response.data.products.edges.map((edge: { node: ShopifyProduct }) => formatProduct(edge.node));
  return products;
}

export async function getProductByHandle(handle: string) {
    const query = `
      {
        product(handle: "${handle}") {
            handle
            title
            description
            vendor
            tags
            productType
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
        }
      }
    `;
    const response = await shopifyRequest(query);
  
    if (response.error || !response.data?.product) {
      return null;
    }
  
    return formatProduct(response.data.product);
}

export async function getCollectionProducts(collection: string) {
    const query = `
      {
        collection(handle: "${collection}") {
          products(first: 250) {
            edges {
              node {
                handle
                title
                description
                vendor
                tags
                productType
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    const response = await shopifyRequest(query);
  
    if (response.error || !response.data?.collection?.products) {
      return [];
    }
  
    const products = response.data.collection.products.edges.map((edge: { node: ShopifyProduct }) => formatProduct(edge.node));
    return products;
}