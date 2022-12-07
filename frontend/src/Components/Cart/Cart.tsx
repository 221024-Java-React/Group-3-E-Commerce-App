import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { Person } from '../../Types/Person';
import './Cart.css';
import { CartCard } from './CartCard';
import { getOrders } from '../../Redux/Slices/OrderSlice';
import { Order } from '../../Types/Order';
import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';


export const Cart:React.FC = () => {
   
   
    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    const dispatch:DispatchType= useDispatch();
    console.log(p);


<<<<<<< HEAD
    //const [newOrder, setNewOrder] = useState<Order>();

    const [newPayment, setNewPayment] = useState<Payment>({
        id:0,
        name:"",
        description:""
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

        const order:Order = {
            id: 5,
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


=======
     
      

       
>>>>>>> 9fc0b33f91a120ad8cc614abd87ebe81c7827079
        //dispatch(updateOrder(order));
        //
    }

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

        console.log("order: " + state.order.orders);
        console.log("State changed in the store ", state);
    }, [state, state.product.products.length, state.order.orders, state.order.orders.length, newCart, newPayment]);
=======

    useEffect(()=>{
        console.log("customer id is: "+p.customerId);
        dispatch(getOrders(p.customerId));
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68

     } , []
    );
    //const orders=  JSON.parse(localStorage.getItem("orders")|| '{}');
   // console.log("all orders from cart page "+orders)
   const orders = useSelector((state:RootState) => state.order); 
   //console.log("order state orders "+orders.orders[0].product.description);
    return (

        <>
        <h1 className="cart-title">Shopping Cart</h1>     
        <div className="cart-container">
            
            <div className="product-container">
            {
                orders.orders.map((order:Order)=>{
                    return <CartCard  key={order.product.id} id={order.product.id} 
                    title={order.product.title} price={order.product.price} 
                    quantity={order.product.quantity} description={order.product.description} />
                })
            }
            </div>
            <div className="order-container">
                <h2>Order Details</h2>
                {
                    orders.orders.map((orders:Order)=>{
                        return <OrderCard key={orders.orderId} orderId={orders.orderId} 
                        person={orders.person} product={orders.product} totalPrice={orders.totalPrice} 
                        totalItem={orders.totalItem} OrderStatus={orders.OrderStatus} 
                        paymentType={orders.paymentType} />
                    })
                   
                }
                
                <Link to="/checkout" onClick={()=>{}}>Checkout</Link>
            </div>
        </div>
        </>
    )
}

