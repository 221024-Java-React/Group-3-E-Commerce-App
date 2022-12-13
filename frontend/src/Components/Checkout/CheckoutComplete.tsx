import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReceipts } from '../../Redux/Slices/ReceiptSlice';
import { DispatchType, RootState } from '../../Redux/Store';
import { Receipt } from '../../Types/Receipt';
import './CheckoutComplete.css';
import { ReceiptCard } from './ReceiptCard';

export const CheckoutComplete:React.FC = () => {
    const dispatch:DispatchType = useDispatch();
    const receipts = useSelector((state:RootState)=> state.receipt);

    useEffect(()=>{
        dispatch(getAllReceipts());
    }, [])

    console.log("receipt: " );
    
    return (
        <>
        <h1 className="checkoutcomplete-title">Thank you!</h1>
        <div className="checkoutcomplete-container">
            <div><p>Your purchase is complete, we appreciate your business. See you next time.</p></div>
        </div>
        <div className="checkoutcomplete-container">
        <div>
        <h2>Receipt</h2>    
        {
            receipts.receipts.map((receipt:Receipt)=>{
                return <ReceiptCard receipt_id={receipt.receipt_id} customer_id={receipt.customer_id} total_items={receipt.total_items} total_price={receipt.total_price} />
            })
        }
        </div>
        </div>
        </>
    )
}
