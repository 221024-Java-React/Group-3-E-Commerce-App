import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { Person } from '../../Types/Person';
import './Cart.css';
import { CartCard } from './CartCard';
import { getOrders } from '../../Redux/Slices/OrderSlice';
import { Order } from '../../Types/Order';
import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';

export const Cart:React.FC = () => {


    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    const dispatch:DispatchType= useDispatch();
    console.log(p);

    useEffect(()=>{
    console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));

     } , []
    );
    //const orders=  JSON.parse(localStorage.getItem("orders")|| '{}');
   // console.log("all orders from cart page "+orders)
   const orders = useSelector((state:RootState) => state.order); 
   //console.log("order state orders "+orders.orders[0].product.description);
    
   return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">

            <div className="product-container">
            {
                 orders.orders.map((order:Order)=>{
                    return <CartCard  key={order.product.id} id={order.product.id} 
                    title={order.product.title} price={order.product.price} 
                    quantity={order.product.quantity} description={order.product.description} />
                })
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    orders.orders.map((orders:Order)=>{
                        return <OrderCard key={orders.orderId} orderId={orders.orderId} 
                        person={orders.person} product={orders.product} totalPrice={orders.totalPrice} 
                        totalItem={orders.totalItem} OrderStatus={orders.OrderStatus} 
                        paymentType={orders.paymentType} />
                    })

                }
               
                <Link to="/checkout" onClick={()=>{}}>Checkout</Link>
            </div>
        </div>
        </>
    )
}
