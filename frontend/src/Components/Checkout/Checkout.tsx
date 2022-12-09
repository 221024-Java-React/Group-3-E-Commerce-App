import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import './Checkout.css';
import { Order } from '../../Types/Order';
import { OrderCard } from '../Cart/OrderCard';
import { Payment } from '../../Types/Payment';
import { PaymentCard } from './PaymentCard';
import { Link } from 'react-router-dom'
import { removeOrder } from '../../Redux/Slices/OrderSlice';
import PaymentSlice, { getPaymentTypes } from '../../Redux/Slices/PaymentSlice';

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const orders = useSelector((state:RootState) => state.order); 
    const payments = useSelector((state:RootState)=> state.payment)

    const handlePurchase = ()=>{
        dispatch(removeOrder(state.order.orders.length));
    };
    
    useEffect(()=>{
        if(payments.payments.length===0){
            dispatch(getPaymentTypes());
        }
    }, [payments.payments.length]);

    let tprice = 0
    let tquantity = orders.orders.length;
    orders.orders.map((order:Order)=>{

        console.log("order inside map: " + order.product.quantity);
        tprice = tprice + (order.product.price * order.totalItem);
        return tprice;});
    
    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);
    
    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);
    console.log(payments);
    console.log("orders: " + state.order.orders);

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
                    payments.payments.map((payment:Payment)=>{
                        return <PaymentCard key={payment.paymentTypeId} paymentTypeId={payment.paymentTypeId} type={payment.type}/> 
                    })
                }
                <Link to="/checkout-complete" onClick={handlePurchase}>Purchase Order!</Link>
            </div>
        </div>
        </>
        
        
    )
}