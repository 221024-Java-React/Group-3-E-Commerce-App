import React, { useState, useEffect } from 'react';
import { Payment } from '../../Types/Payment';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { addPayment, removePayment } from '../../Redux/Slices/PaymentSlice';
import './PaymentCard.css';

export const PaymentCard:React.FC<Payment> = ({id, name, description}) => {
    const dispatch:DispatchType = useDispatch();

    const [payment, setPayment] = useState<Payment>();


    useEffect(()=>{
        console.log("Enters useEffect");
    //    console.log("State changed in the store ", state);
    }, [payment]);

    return (
        <>
        <div className="paymentcard-container">
            <br />
            <p>{name}</p>
            <p>{description}</p>
        </div>
        </> 
    )
}
