
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { Order } from '../../Types/Order';
export const OrderCard:React.FC<Order> = (order) => {
    const dispatch:DispatchType = useDispatch();
    const [newOrder, setOrder] = useState();
    const checkout = () => {
        // dispatch(checkoutOrder(order));
    }
    useEffect(()=>{
    }, [newOrder])
    
    return (

        <div>
            <br />
            <h2>Order Id: {order.orderId}</h2>
            <h3>Total Item: {order.totalItem}</h3>
            <h3>Total Price: {order.totalPrice}</h3>

        </div>

    )
}