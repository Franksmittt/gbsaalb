// FILE: src/lib/shopify.ts
import { Product } from '@/types';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch({ query, variables }: { query: string; variables?: Record<string, any> }) {
  // This check now happens inside the function, satisfying TypeScript.
  if (!domain || !storefrontAccessToken) {
    console.error("CRITICAL ERROR: Shopify domain or access token is missing.");
    throw new Error("Shopify credentials are not configured.");
  }

  const endpoint = `https://${domain}/api/2024-07/graphql.json`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Shopify API responded with status ${response.status}`);
    }

    const jsonResponse = await response.json();
    if (jsonResponse.errors) {
      console.error('GraphQL Errors:', jsonResponse.errors);
      throw new Error('Failed to fetch from Shopify API due to GraphQL errors.');
    }
    return jsonResponse.data;
  } catch (error) {
    console.error('Error in shopifyFetch:', error);
    return null;
  }
}

// This function remains the same as my previous fix, relying on tags.
const processProductNode = (product: any): Product | null => {
  try {
    if (!product) return null;
    const productTypes: string[] = [product.productType || 'Uncategorized'];
    let warranty = 'Standard Warranty';

    product.tags.forEach((tag: string) => {
      const parts = tag.split(':');
      if (parts.length === 2) {
        const key = parts[0].trim().toLowerCase();
        const value = parts[1].trim();
        if (['voltage', 'ah', 'cca', 'size', 'length', 'width', 'height'].includes(key)) {
          specs[key as keyof Product['specs']] = value;
        } else if (key === 'warranty') {
          warranty = value;
        } else if (key === 'type') {
          productTypes.push(value);
        }
      }
    });

    const specs: Product['specs'] = {};
    product.tags.forEach((tag: string) => {
        const parts = tag.split(':');
        if (parts.length === 2) {
            const key = parts[0].trim().toLowerCase();
            const value = parts[1].trim();
            if (['voltage', 'ah', 'cca', 'size', 'length', 'width', 'height'].includes(key)) {
                specs[key as keyof Product['specs']] = value;
            }
        }
    });

    return {
      id: product.handle,
      name: product.title,
      category: productTypes,
      type: productTypes,
      brand: product.vendor || 'Unknown Brand',
      price: parseFloat(product.priceRange?.minVariantPrice?.amount || '0.00'),
      imageUrl: product.images?.edges?.[0]?.node?.url || '/images/placeholder.jpg',
      description: product.descriptionHtml || '',
      stock_status: 'In Stock',
      warranty,
      specs,
    };
  } catch (error) {
    console.error(`Failed to process Shopify product: ${product?.handle || '(unknown handle)'}`, error);
    return null;
  }
};

const getProductsQuery = `
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          handle
          title
          descriptionHtml
          productType
          vendor
          tags
          priceRange { minVariantPrice { amount } }
          images(first: 1) { edges { node { url altText } } }
        }
      }
      pageInfo { hasNextPage endCursor }
    }
  }
`;

export async function getAllProducts(): Promise<Product[]> {
    let allEdges: any[] = [];
    let hasNextPage = true;
    let cursor: string | null = null;
  
    while (hasNextPage) {
      const data = await shopifyFetch({ 
          query: getProductsQuery,
          variables: { first: 250, after: cursor }
      });
      if (!data?.products) {
          hasNextPage = false;
          continue;
      }
  
      allEdges = allEdges.concat(data.products.edges);
      hasNextPage = data.products.pageInfo.hasNextPage;
      cursor = data.products.pageInfo.endCursor;
    }
    
    if (allEdges.length === 0) return [];
  
    return allEdges
      .map((edge: any) => processProductNode(edge.node))
      .filter((p: Product | null): p is Product => p !== null);
}

const getProductByHandleQuery = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      descriptionHtml
      productType
      vendor
      tags
      priceRange { minVariantPrice { amount } }
      images(first: 5) { edges { node { url altText } } }
    }
  }
`;

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch({ query: getProductByHandleQuery, variables: { handle } });
  if (!data?.product) {
    return null;
  }
  return processProductNode(data.product);
}

const getCollectionProductsQuery = `
  query getCollectionProducts($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            descriptionHtml
            productType
            vendor
            tags
            priceRange { minVariantPrice { amount } }
            images(first: 1) { edges { node { url altText } } }
          }
        }
      }
    }
  }
`;

export async function getCollectionProducts(handle: string, count: number = 8): Promise<Product[]> {
    const data = await shopifyFetch({ query: getCollectionProductsQuery, variables: { handle, first: count } });
    if (!data?.collection?.products?.edges) {
      return [];
    }
    return data.collection.products.edges
      .map((edge: any) => processProductNode(edge.node))
      .filter((p: Product | null): p is Product => p !== null);
}