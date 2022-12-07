import React, { useState, useEffect } from 'react';
import { Payment } from '../../Types/Payment';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { addPayment, removePayment } from '../../Redux/Slices/PaymentSlice';
import './PaymentCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

export const PaymentCard:React.FC<Payment> = ({id, name, description}) => {
    
    const state = useSelector((state:RootState) => state);
    
    useEffect(()=>{
  
    });

    return (
        <>
        <div className="paymentcard-container">
            <div>
                <input type="checkbox" id={name} name={name}/>
                <p>{name}</p><p>{description}</p>
                <br />
            </div>
        </div>
        </> 
    )
}
