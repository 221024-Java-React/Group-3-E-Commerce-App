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
import { OrderDetail } from '../../Types/OrderDetail';
import { addPayment } from '../../Redux/Slices/PaymentSlice';
import { Payment } from '../../Types/Payment';
import { Checkout } from '../Checkout/Checkout';

export const Cart:React.FC = () => {


    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    const dispatch:DispatchType= useDispatch();
    console.log(p);

    const checkout = () => {
        const payment1:Payment = {
            id:1,
            name:"Paypal",
            description:"Sign into Paypal to make purchase"
        }

        dispatch(addPayment(payment1));

        const payment2:Payment = {
            id:2,
            name:"Credit Card",
            description:"Use a credit card to make purchase"
        }

        dispatch(addPayment(payment2));

        const payment3:Payment = {
            id:2,
            name:"Paypal",
            description:"Use a debit card to make purchase"
        }

        dispatch(addPayment(payment3));
    }

    useEffect(()=>{
    console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));

     } , []
    );
    //const orders=  JSON.parse(localStorage.getItem("orders")|| '{}');
   // console.log("all orders from cart page "+orders)
   const orders = useSelector((state:RootState) => state.order); 
   //console.log("order state orders "+orders.orders[0].product.description);

   let tprice = 0
   let tquantity = orders.orders.length;
   
    orders.orders.map((order:Order)=>{

        console.log("order inside map: " + order.product.quantity);
        tprice = tprice + (order.product.price * order.totalItem);
        return tprice;});

    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);

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
                <OrderCard total_items={tquantity} total_price={tprice}  />
                <Link to="/checkout" onClick={checkout}>Checkout</Link>
            </div>
        </div>
        </>
    )
}
