import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { Person } from '../../Types/Person';
import './Cart.css';
<<<<<<< HEAD
import { removePayment } from '../../Redux/Slices/PaymentSlice';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { OnDeviceTraining } from '@mui/icons-material';
import { OrderDetail } from '../../Types/OrderDetail';
import { Person } from '../../Types/Person';
import { stat } from 'fs';
import { is } from 'immer/dist/internal';

export const Cart:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const userState = useSelector((state:RootState) => state.auth);
    let navigate = useNavigate();

    const [newPayment, setNewPayment] = useState<Payment>({
        id:0,
        name:"",
        description:""
    });

    const submitCheckout = () => {
        const payment1:Payment = {
            id:1,
            name:"Paypal",
            description:"Pay using you Paypal account"
        }
        
        dispatch(addPayment(payment1));

        const payment2:Payment = {
            id:2,
            name:"Credit",
            description:"Pay using your credit card"
        }
        
        dispatch(addPayment(payment2));

        const payment3:Payment = {
            id:3,
            name:"Debit",
            description:"Pay using your debit card"
        }
        
        dispatch(addPayment(payment3));
    }

    const user = JSON.parse(localStorage.getItem("user")|| '{}');
    const orders = JSON.parse(localStorage.getItem("orders")|| '{}');
   
    const order:Order = {
        orderId:1,
        totalPrice:112.99,
        totalItem:15
    }

    useEffect(()=>{

    }, [state, state.order.orders.length, newPayment, userState.isLoggedIn])
  
        if(state.order.orders.length === 0){
            dispatch(addOrder(order));
            //window.location.reload ();
            console.log("enters do while");
        } 
 
    
    console.log(state.order.orders.length);
    console.log(user);
    console.log(orders); 
    
    
=======
import { CartCard } from './CartCard';
import { getOrders } from '../../Redux/Slices/OrderSlice';
import { Order } from '../../Types/Order';
import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';


export const Cart:React.FC = () => {
   
   
    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    const dispatch:DispatchType= useDispatch();
    console.log(p);



    useEffect(()=>{
        console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));

     } , []
    );
    //const orders=  JSON.parse(localStorage.getItem("orders")|| '{}');
   // console.log("all orders from cart page "+orders)
   const orders = useSelector((state:RootState) => state.order); 
   //console.log("order state orders "+orders.orders[0].product.description);
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
    return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">
            
            <div className="product-container">
            {
<<<<<<< HEAD
               state.order.orders.map((product:Product)=>{
                    return <CartCard id={product.id} title={product.title} price={product.price} quantity={product.quantity} description={product.description} />
=======
                orders.orders.map((order:Order)=>{
                    return <CartCard  key={order.product.id} id={order.product.id} 
                    title={order.product.title} price={order.product.price} 
                    quantity={order.product.quantity} description={order.product.description} />
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
                })
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
<<<<<<< HEAD
                    state.order.orders.map((orders:Order)=>{
                        return <OrderCard key={orders.orderId} orderId={orders.orderId}  totalPrice={orders.totalPrice} totalItem={orders.totalItem}  />
=======
                    orders.orders.map((orders:Order)=>{
                        return <OrderCard key={orders.orderId} orderId={orders.orderId} 
                        person={orders.person} product={orders.product} totalPrice={orders.totalPrice} 
                        totalItem={orders.totalItem} OrderStatus={orders.OrderStatus} 
                        paymentType={orders.paymentType} />
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
                    })
                   
                }
                
<<<<<<< HEAD
                <Link to="/checkout" onClick={submitCheckout}>Checkout</Link>
=======
                <Link to="/checkout" onClick={()=>{}}>Checkout</Link>
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
            </div>
        </div>
        </>
    )
<<<<<<< HEAD
}
=======
}

>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
