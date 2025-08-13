// FILE: src/types.ts

export interface Product {
  id: string; // This is the Shopify handle
  name: string;
  category: string[];
  type: string[];
  brand: string;
  price: number;
  imageUrl: string;
  description: string;
  warranty: string;
  stock_status: 'In Stock' | 'Out of Stock' | 'Low Stock';
  specs: {
    voltage?: string;
    ah?: string;
    cca?: string;
    size?: string;
    length?: string;
    width?: string;
    height?: string;
    weight_kg?: string;
    terminal_layout?: string; 
    hold_down?: string;
  };
}

export interface VehicleData {
  vehicle_type: string;
  make: string;
  model: string;
  year: string;
  variant: string;
  recommended_battery: string;
  alternative_battery: string;
}

export interface Testimonial {
  id: number;
  name:string;
  location: string;
  quote: string;
  avatarUrl: string;
  branch?: 'Alberton' | 'Vanderbijlpark' | 'Sasolburg';
}