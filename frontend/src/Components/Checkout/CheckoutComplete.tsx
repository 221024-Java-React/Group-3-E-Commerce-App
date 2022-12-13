import React, { useEffect } from 'react';
import { makeReceipt } from '../../Redux/Slices/ReceiptSlice';
import './CheckoutComplete.css';

export const CheckoutComplete:React.FC = () => {

    useEffect(()=>{
        //dispatch(getReceipt(id));
    }, [])

    return (
        <>
        
        <h1 className="checkoutcomplete-title">Thank you!</h1>
        <div className="checkoutcomplete-container">
            <p>Your purchase is complete, we appreciate your business. See you next time.</p>

        </div>
        
        
        </>
    )
}
    