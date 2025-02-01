export interface ProductResponse { 
    data: Product[]
    first: number;
    items: number;
    last: number;
    next: number;
    pages: number
    prev: number;
};

export interface Product { 
    id: number; 
    name: string; 
    description: string; 
    price: number; 
    rating: number; 
    image: string 
};