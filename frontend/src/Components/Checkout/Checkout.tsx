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

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    
    useEffect(()=>{
    
    }, [state]);

    return (
        
        <>
        <h1 className="checkout-title">Checkout Page</h1>     
        <div className="checkout-container">
            
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    state.order.orders.map((order:Order)=>{
                        return <OrderCard key={order.id} id={order.id} total_price={order.total_price} total_items={order.total_items} tax={order.tax} shipping_price={order.shipping_price}/>
                        })
                }
            </div>
            <div className="payment-container">
                <h2>Payment</h2>
                {
                    state.payment.payments.map((payment:Payment)=>{
                    return <PaymentCard key={payment.id} id={payment.id} name={payment.name} description={payment.description}/>
                    })
                }
                <Link to="/checkout-complete">Purchase Order!</Link>
            </div>
        </div>
        </>
        
        
    )
}