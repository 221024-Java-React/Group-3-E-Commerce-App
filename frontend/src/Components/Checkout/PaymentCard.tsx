import React, { useEffect } from 'react';
import { Payment } from '../../Types/Payment';
import './PaymentCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

export const PaymentCard:React.FC<Payment> = (payment) => {
    
    const state = useSelector((state:RootState) => state);
    
    useEffect(()=>{
  
    }, []);

    return (
        <>
        <div className="paymentcard-container">
            <div>
                <input type="checkbox" id={payment.type} name={payment.type}/>
                <span>{payment.type}</span>
                <br/><br/>
                <br />
            </div>
        </div>
        </> 
    )
}
