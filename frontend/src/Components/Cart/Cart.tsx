import React, {useState, useEffect} from 'react';
import { Product } from '../../Types/Product';
import { Order } from '../../Types/Order';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { CartCard } from './CartCard';
import { OrderCard } from './OrderCard';
import { addProduct } from '../../Redux/Slices/ProductSlice';
import { addOrder, updateOrder,removeOrder } from '../../Redux/Slices/OrderSlice';
import './Cart.css';
import { removePayment } from '../../Redux/Slices/PaymentSlice';
import { Link } from 'react-router-dom'

export const Cart:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);

    const [newCart, setNewCart] = useState<Product>({
        id:0,
        title:"",
        price:0,
        quantity:0,
        description:"",
        order_id:0
    });

    const [newOrder, setNewOrder] = useState<Order>({
        id:0,
        product_id: 0,
        total_price: 0,
        total_items: 0,
        tax: 0,
        shipping_price:0
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCart({
            ...newCart,
            [e.target.name]: e.target.value
        });
    }

    const submitCart = () => {

        const item:Product = {
            id: Math.floor(Math.random()*1000)+1,
            title: newCart.title,
            price: newCart.price,
            quantity: newCart.quantity,
            description: newCart.description,
            order_id : 5
        };

        dispatch(addProduct(item));

        let totalPrice=0;
        let totalItems=0;
        let nTax=0;

        state.product.products.map(({price, quantity})=>{ 
            totalPrice+=(price * quantity)
            return totalPrice
        });

        state.product.products.map(({quantity})=>{ 
            totalItems+=(quantity * 1)
            return totalItems 
        });
      
        console.log("Prices: " + totalPrice );
        console.log("Quantities: " + totalItems);
     
        const order:Order = {
            id: 0,
            total_price: totalPrice,
            total_items: totalItems,
            tax: nTax,
            shipping_price:0 //props.ord.shipping_price
        };

        let orderId = 0;
        
        state.order.orders.map(({id})=>{ 
            id=(id * 1)
            return id
        });
        
        console.log("orderid: " + orderId);

        //dispatch(updateOrder(order));
        dispatch(removeOrder(orderId));

        if( orderId === 0){
            dispatch(addOrder(order));
        }
    }

    useEffect(()=>{
        
        console.log("State changed in the store ", state);
    }, [state, state.order, state.product.products.length]);

    return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">
            
            <div className="product-container">
                
                {
                state.product.products.map((product:Product)=>{
                    return <CartCard key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} description={product.description} />
                })
                }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    state.order.orders.map((order:Order)=>{
                    return <OrderCard key={order.id} id={order.id} total_price={order.total_price} total_items={order.total_items} tax={order.tax} shipping_price={order.shipping_price}/>
                    })
                }
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>

            <br/> <br></br>
            <div>
                <h3>Product Name</h3>
                <input name="title" type="text" onChange={handleChange}/>
                <h3>Price</h3>
                <input name="price" type="number" onChange={handleChange}/>
                <h3>Quantity</h3>
                <input name="quantity" type="number" onChange={handleChange}/>
                <h3>Description</h3>
                <input name="description" type="textarea" onChange={handleChange}/>
                <button onClick={submitCart}>Buy Item</button>
            </div>
        </>
    )
}