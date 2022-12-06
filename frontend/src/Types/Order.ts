import { Person } from "./Person";
import { Product } from "./Product";

export interface Order{
    id:number;
    person:Person;
    product:Product;
    created_date?:Date;
    total_price:number;
    total_items:number;
    tax:number;
    shipping_price:number;
    status:Status;
    payment:Payment;
}

export interface Payment{
    id: number;
    name: string;
}

export interface Status{
    id : number,
    name: string
}