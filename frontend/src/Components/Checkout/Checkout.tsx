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

export const Checkout:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);

    const [payments, setPayments] = useState<Payment[]>([
        {
        id:0,
        name:"",
        description:""
        },

    ]);


    useEffect(()=>{

        const payment1:Payment = {
            id:1,
            name:"Paypal",
            description:"Pay with your Paypal acccount."
        }

        const payment2:Payment = {
            id:2,
            name:"Credit/Debit Card",
            description:"Pay with your credit or debit card"
        }

        const payment3:Payment = {
            id:3,
            name:"Check/Money Order",
            description:"Pay with check or money order"
        }

        const payment4:Payment = {
            id:4,
            name:"Cash On Deliver (COD)",
            description:"Pay when packaged is recieved"
        }

        //dispatch(addPayment(payment1));
        //dispatch(addPayment(payment2));
        //dispatch(addPayment(payment3));
        //dispatch(addPayment(payment4));

        console.log("State changed in the store ", state);
    }, [payments]);

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

                    
                    //state.payment.payments.map((payment:Payment)=>{
                    //return <PaymentCard key={payment.id} id={payment.id} name={payment.name} description={payment.description}/>
                    //})
                }
                
                <Link to="/checkout-complete">Purchase Order!</Link>
            </div>
            
        </div>
        </>
    )
}