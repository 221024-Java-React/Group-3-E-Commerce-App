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

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);

    const handlePurchase = ()=>{
        dispatch(removeOrder(state.order.orders.length));
    };
    
    useEffect(()=>{
    
    }, [state]);

    const orders = JSON.parse(localStorage.getItem("orders")|| '{}');
    
    return (
        
        <>
        <h1 className="checkout-title">Checkout Page</h1>     
        <div className="checkout-container">
            
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    orders.map((orders:Order)=>{
                        return <OrderCard key={orders.orderId} orderId={orders.orderId} person={orders.person} product={orders.product} totalPrice={orders.totalPrice} totalItem={orders.totalItem} OrderStatus={orders.OrderStatus} paymentType={orders.paymentType} />
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
                <Link to="/checkout-complete" onClick={handlePurchase}>Purchase Order!</Link>
            </div>
        </div>
        </>
        
        
    )
}