import React, {useState, useEffect} from 'react';
import { Product } from '../../Types/Product';
import { Order } from '../../Types/Order';
import { Payment } from '../../Types/Payment';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { CartCard } from './CartCard';
import { OrderCard } from './OrderCard';
import { addProduct } from '../../Redux/Slices/ProductSlice';
import { addOrder, updateOrder,removeOrder } from '../../Redux/Slices/OrderSlice';
import { addPayment } from '../../Redux/Slices/PaymentSlice';
import './Cart.css';
import { removePayment } from '../../Redux/Slices/PaymentSlice';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { OnDeviceTraining } from '@mui/icons-material';
import { OrderDetail } from '../../Types/OrderDetail';

export const Cart:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const userState = useSelector((state:RootState) => state.auth);
    let navigate = useNavigate();

   /* const [newCart, setNewCart] = useState<Product>({
        id:0,
        title:"",
        price:0,
        quantity:0,
        description:"",
        order_id:0
    });*/

    //const [newOrder, setNewOrder] = useState<Order>();

    const [newPayment, setNewPayment] = useState<Payment>({
        id:0,
        name:"",
        description:""
    });

    /*const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCart({
            ...newCart,
            [e.target.name]: e.target.value
        });
    }*/

   /* const submitCart = () => {

        const item:Product = {
            id: newCart.id,
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 312f2c50ca491baf86a09cb95dd3a840041e1d3c

        const order:Order = {
            total_price: totalPrice,
            total_items: totalItems,
            tax: nTax,
            shipping_price:0
        }
        
        dispatch(addOrder(order));

        console.log("state of order: " + state.order.orders);
       
        if(order.id === 5){
            dispatch(removeOrder(5));
            dispatch(addOrder(order));
        }else{
            
        }


<<<<<<< HEAD
=======
=======
     
      

       
>>>>>>> 9fc0b33f91a120ad8cc614abd87ebe81c7827079
>>>>>>> 312f2c50ca491baf86a09cb95dd3a840041e1d3c
        //dispatch(updateOrder(order));
        //
    }
    */

    const submitCheckout = () => {
        const payment1:Payment = {
            id:1,
            name:"Paypal",
            description:"Pay using you Paypal account"
        }
        
        dispatch(addPayment(payment1));

        const payment2:Payment = {
            id:2,
            name:"Credit/Debit",
            description:"Pay using you debit or credit card"
        }
        
        dispatch(addPayment(payment2));

        const payment3:Payment = {
            id:3,
            name:"Check/Money",
            description:"We will give you detailed instructions via email"
        }
        
        dispatch(addPayment(payment3));
    }

    useEffect(()=>{

    //if(userState.isLoggedIn)navigate("/cart");
    console.log(localStorage.getItem('customerId'));

}, [state, state.product.products.length, state.order.orders, state.order.orders.length, newPayment, userState.isLoggedIn])

const user = JSON.parse(localStorage.getItem("user")|| '{}');
const orders:Order[] = JSON.parse(localStorage.getItem("orders")|| '{}');
console.log(orders);
console.log(user);



    return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">
            
            <div className="product-container">
            {
          
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
                  /*orders.map((order:Order)=>{

                        return <OrderCard key={order.id} id={order.id} total_price={order.total_price} total_items={order.total_items} tax={order.tax} shipping_price={order.shipping_price} />

                   })*/

                   <p>{orders.map((order:Order)=>{
                        return [order.total_price];
                   })}</p>
                   
                }
                
                <Link to="/checkout" onClick={submitCheckout}>Checkout</Link>
            </div>
        </div>
                {/*
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
            */}
        </>
    )
}