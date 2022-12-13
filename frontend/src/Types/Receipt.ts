import { Address } from "cluster";
import { Order } from "./Order";

export interface Receipt{
    receipt_id?:number;
    customer_id:number;
    address?:Address;
    order_number?:string;
    date_purchased?:Date;
    order_items?:Order[];
    total_items:number;
    total_price:number;
}