
export interface OrderDetail{
    id:number;
    customer_id?:number;
    product_id:number;
    created_date?:Date;
    total_price:number;
    total_items:number;
    tax:number;
    shipping_price:number;
    status_id?:number;
    payment_id?:number;
}