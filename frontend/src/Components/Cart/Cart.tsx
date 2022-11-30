import React, {useState, useEffect} from 'react';
import { Product } from '../../Types/Product';
import { OrderDetail } from '../../Types/OrderDetail';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { CartCard } from './CartCard';
import { OrderCard } from './OrderCard';
import { addProduct } from '../../Redux/Slices/ProductSlice';
import { addOrder, removeOrder } from '../../Redux/Slices/OrderSlice';
import './Cart.css';

export const Cart:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);

    useEffect(()=>{
        /*
            if(localstore.get("userid")) dispatch(getUserInfo(id))
            else push to login
        */
        console.log("State changed in the store ", state);
    }, [state]);

    const [newCart, setNewCart] = useState<Product>({
        id:0,
        title:"",
        price:0,
        quantity:0,
        description:"",
    });

   /* const [newOrder, setNewOrder] = useState<OrderDetail>({
        id:0,
        product_id: 0,
        total_price: 0,
        total_items: 0,
        tax: 0,
        shipping_price:0
    });*/

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
            order_id : 1
        };

        let nTotal_price=0;
        let nTotal_items=0;
        let nTax=0;

       //Note to self: get prop data from state rather that from CartProps this should fix the problem.
        
     /*   for(let i=0; i< props.prods.length; i++){
            nstate.cart.carts.map(()=>{
                nTotal_price = nTotal_price + (props[i].price*props[i].quantity);
                nTotal_items += props.prods[i].quantity;
                console.log(props.prods[i]);
                console.log("went in for loop");
            })
        }
    */

        nTax = nTotal_price * .08;
        nTotal_price += nTax;

        
        const order:OrderDetail = {
            id: 5,
            product_id: 0, //props.ord.product_id,
            total_price: nTotal_price,
            total_items: nTotal_items,
            tax: nTax,
            shipping_price:0 //props.ord.shipping_price
        };
        
        let tempProdOrderId;

        state.product.products.map((prod:Product)=>{
            tempProdOrderId = prod.order_id;
        })
        
        dispatch(removeOrder(5));
        if(tempProdOrderId === 5){
            dispatch(addProduct(item));
        }else{
            dispatch(addProduct(item));
            dispatch(addOrder(order));
        }

    }

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
                    state.order.orders.map((order:OrderDetail)=>{
                    return <OrderCard key={order.id} id={order.id} product_id={order.product_id} total_price={order.total_price} total_items={order.total_items} tax={order.tax} shipping_price={order.shipping_price}/>
                    })
                }
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