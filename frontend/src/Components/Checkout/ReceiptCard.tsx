
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import { Person } from '../../Types/Person';
import { Receipt } from '../../Types/Receipt';
//import './ReceiptCard.css';

export const ReceiptCard:React.FC<Receipt> = (receipt) => {
    const p:Person = JSON.parse(localStorage.getItem("user")|| '');
    const receipts = useSelector((state:RootState)=> state.receipt);
    
    useEffect(()=>{
    }, [])

    
    return (
        <>
        <div className="receiptcard-container">
            <span>Order # : {receipt.receipt_id}</span><br/>
            <span>Customer Name: {p.name}</span><br/>
            <span>Total items: {receipt.total_items}</span><br/>
            <span>Total price: {receipt.total_price}</span><br/>
        </div>
        </>
        
    )
}