export interface Product {
    id: number;
    title: string;
    price: number;
    image?:string;
    quantity: number;
    description: string;
    category?:number;
    order_id?:number;
}
