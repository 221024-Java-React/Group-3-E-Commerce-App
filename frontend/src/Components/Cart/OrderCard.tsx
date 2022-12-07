import React, { useState, useEffect } from 'react';
import { DispatchType, RootState } from '../../Redux/Store';
import { Order } from '../../Types/Order';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderById } from '../../Redux/Slices/OrderSlice';

export const OrderCard:React.FC<Order> = (order) => {

    let navigate = useNavigate();
    const state  = useSelector((state:RootState) => state);
    const userState = useSelector((state:RootState) => state.auth);
    const dispatch:DispatchType = useDispatch();

    useEffect(()=>{
        if(userState.isLoggedIn)navigate("/cart");
            console.log(localStorage.getItem('customerId'));
        }, [userState.isLoggedIn, state.order.orders.length])

        

    const user = JSON.parse(localStorage.getItem("user")|| '{}');
    console.log(user);
    return (

        <div>
            <br />
            <h2>Order Id: {order.orderId}</h2>
            <h3>Total Item: {order.totalItem}</h3>
            <h3>Total Price: {order.totalPrice}</h3>
          
        </div>
 
    )
}