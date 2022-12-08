import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import './Checkout.css';
import { Order } from '../../Types/Order';
import { OrderCard } from '../Cart/OrderCard';
import { Payment } from '../../Types/Payment';
import { PaymentCard } from './PaymentCard';
import { addPayment, removePayment } from '../../Redux/Slices/PaymentSlice';
import { Link } from 'react-router-dom'
import { Payments } from '@mui/icons-material';
import { removeOrder } from '../../Redux/Slices/OrderSlice';
import { OrderDetail } from '../../Types/OrderDetail';

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);

    const handlePurchase = ()=>{
        dispatch(removeOrder(state.order.orders.length));
    };
    
    useEffect(()=>{
    
    }, [state]);

    const orders = useSelector((state:RootState) => state.order); 
    console.log(orders);
    let tprice = 0
    let tquantity = 0;
   
    orders.orders.map((order:Order)=>{
        tprice = tprice + (order.product.price * order.product.quantity);
        return tprice;});

    orders.orders.map((order:Order)=>{
        tquantity = tquantity + order.product.quantity;
            return tquantity;});    
    
    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);
    
    return (
        
        <>
        <h1 className="checkout-title">Checkout Page</h1>     
        <div className="checkout-container">
            
            <div className="order-container">
                <h2>Order Details</h2>
                <OrderCard total_items={tquantity} total_price={tprice} />
            </div>
            <div className="payment-container">
                <h2>Payment</h2>
                {
                    state.payment.payments.map((payment:Payment)=>{
                    return <PaymentCard key={payment.id} id={payment.id} name={payment.name} description={payment.description}/>
                    })
                }
                <Link to="/checkout-complete" onClick={handlePurchase}>Purchase Order!</Link>
            </div>
        </div>
        </>
        
        
    )
}