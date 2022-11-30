import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { OrderDetail } from '../../Types/OrderDetail';
import { Link } from 'react-router-dom'

export const OrderCard:React.FC<OrderDetail> = (order) => {

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
            <h2>Order Id: {order.id}</h2>
            <h3>Total Price: {order.total_price}</h3>
            <h3>Total Item: {order.total_items}</h3>
            <h3>Tax: {order.tax}</h3>
            <h3>Shipping Price: {order.shipping_price}</h3>
            <Link to="/checkout">Checkout</Link>
        </div>
 
    )
}