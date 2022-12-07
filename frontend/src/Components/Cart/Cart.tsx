import React, {useState, useEffect} from 'react';
import { Product } from '../../Types/Product';
import { Order } from '../../Types/Order';
import { Payment } from '../../Types/Payment';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { CartCard } from './CartCard';
import { OrderCard } from './OrderCard';
import { addProduct } from '../../Redux/Slices/ProductSlice';
import { addOrder, updateOrder,removeOrder } from '../../Redux/Slices/OrderSlice';
import { addPayment } from '../../Redux/Slices/PaymentSlice';
import './Cart.css';
import { removePayment } from '../../Redux/Slices/PaymentSlice';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { OnDeviceTraining } from '@mui/icons-material';
import { OrderDetail } from '../../Types/OrderDetail';
import { Person } from '../../Types/Person';
import { stat } from 'fs';
import { is } from 'immer/dist/internal';

export const Cart:React.FC = () => {

<<<<<<< HEAD
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const userState = useSelector((state:RootState) => state.auth);
    let navigate = useNavigate();
=======

<<<<<<< HEAD
    //const [newOrder, setNewOrder] = useState<Order>();
>>>>>>> 54141419efeff496dca8f02941e9b8a7a6ff0e01

    const [newPayment, setNewPayment] = useState<Payment>({
        id:0,
        name:"",
        description:""
    });

    const submitCheckout = () => {
        const payment1:Payment = {
            id:1,
            name:"Paypal",
            description:"Pay using you Paypal account"
        }
        
        dispatch(addPayment(payment1));

        const payment2:Payment = {
            id:2,
            name:"Credit",
            description:"Pay using your credit card"
        }
        
        dispatch(addPayment(payment2));

        const payment3:Payment = {
            id:3,
            name:"Debit",
            description:"Pay using your debit card"
        }
        
        dispatch(addPayment(payment3));
    }

<<<<<<< HEAD
    const user = JSON.parse(localStorage.getItem("user")|| '{}');
    const orders = JSON.parse(localStorage.getItem("orders")|| '{}');
   
    const order:Order = {
        id:orders.id,
        person:orders.person,
        product:orders.product,
        total_price:112.99,
        total_items:15,
        tax:orders.tax,
        shipping_price:orders.shipping_price,
        status:orders.status,
        payment:orders.payment
    }

    useEffect(()=>{
=======
    useEffect(()=>{

        console.log("order: " + state.order.orders);
        console.log("State changed in the store ", state);
    }, [state, state.product.products.length, state.order.orders, state.order.orders.length, newCart, newPayment]);
=======

    useEffect(()=>{
        console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
>>>>>>> 54141419efeff496dca8f02941e9b8a7a6ff0e01

    }, [state, state.order.orders.length, newPayment, userState.isLoggedIn])
  
        if(state.order.orders.length === 0){
            dispatch(addOrder(order));
            //window.location.reload ();
            console.log("enters do while");
        } 
 
    
    console.log(state.order.orders.length);
    console.log(user);
    console.log(orders); 
    
    
    return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">
            
            <div className="product-container">
            {
                state.order.orders.map((order:Order)=>{
                    return <CartCard  key={order.product.id} id={order.product.id} title={order.product.title} price={order.product.price} quantity={order.product.quantity} description={order.product.description} />
                })
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    state.order.orders.map((orders:Order)=>{
                        return <OrderCard key={orders.id} id={orders.id} person={orders.person} product={orders.product} total_price={orders.total_price} total_items={orders.total_items} tax={orders.tax} shipping_price={orders.shipping_price} status={orders.status} payment={orders.payment} />
                    })
                   
                }
                
                <Link to="/checkout" onClick={submitCheckout}>Checkout</Link>
            </div>
        </div>
        </>
    )
}