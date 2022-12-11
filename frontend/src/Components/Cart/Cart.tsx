import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { Person } from '../../Types/Person';
import './Cart.css';
import { CartCard } from './CartCard';
import { getOrders, removeOrder } from '../../Redux/Slices/OrderSlice';
import { Order } from '../../Types/Order';
import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';

export const Cart:React.FC = () => {

    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    const dispatch:DispatchType= useDispatch();
    const orderState = useSelector((state:RootState)=>state.order);
    console.log(p);
    
    useEffect(()=>{
    console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));
        if(orderState.orders.length==0){
            dispatch(removeOrder(orderState.orders.length)).then(()=>{
                dispatch(getOrders(p.customerId));
        })}
    } , []);

    //const orders=  JSON.parse(localStorage.getItem("orders")|| '{}');
   // console.log("all orders from cart page "+orders)
   const orders = useSelector((state:RootState) => state.order); 
   //console.log("order state orders "+orders.orders[0].product.description);

   let tprice = 0;
   let tquantity=0;
   if(orders.orders.length)
   {
    tquantity =orders.orders.length;
   
    orders.orders.map((order:Order)=>{

        console.log("order inside map: " + order.product.quantity);
        tprice = tprice + (order.product.price * order.totalItem);
        return tprice;});
    }
    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);
    console.log(orders);

   return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">

            <div className="product-container">
            {
                 orders.orders.map((order:Order)=>{
                    return <CartCard  key={order.orderId} id={order.orderId} 
                    title={order.product.title} price={order.product.price} 
                    quantity={order.product.quantity} description={order.product.description} />
                })
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                <OrderCard total_items={tquantity} total_price={tprice}  />
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
        </>
    )
}
