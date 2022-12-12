import React, { useEffect, useState } from 'react';
import { Payment } from '../../Types/Payment';
import './PaymentCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { getTotalItemsCount, PType, updatePaymentType } from '../../Redux/Slices/OrderSlice';
import { Person } from '../../Types/Person';
import { Order } from '../../Types/Order';
import { inputAdornmentClasses } from '@mui/material';

export const PaymentCard:React.FC<Payment> = (payment) => {
    
    const state = useSelector((state:RootState) => state);
    const p:Person = JSON.parse(localStorage.getItem("user") || '');
    const dispatch:DispatchType = useDispatch();
    const payments = useSelector((state:RootState)=>state.payment)
    //const orders = JSON.parse(JSON.stringify(localStorage.getItem("orders")) ||'{}');
    const [type, setType] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setType(parseInt(e.target.value));
     }

    let ptype:PType = {
        customer_id:p.customerId,
        type:type
    }
    
    localStorage.setItem("ptype", JSON.stringify(ptype));
    const ptype2 = JSON.parse(localStorage.getItem("ptype")|| '');
    console.log(ptype2);
    useEffect(()=>{
    }, []);

    return (
        <>
        <div className="paymentcard-container">
            
        </div>
        </> 
    )
}

 



