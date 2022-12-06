export interface Product {
    id: number;
    title: string;
    price: number;
    image?:string;
    quantity: number;
    description: string;
    category?:Category;
}


export interface Category{

id: number;
name: string;
}


