export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
    quantity?: number;
    rating?: number;
  }