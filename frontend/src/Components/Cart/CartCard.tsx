import React, { useState, useEffect } from 'react';
import { Product } from '../../Types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { updateProduct } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';
import { Equant, getOrders, removeOrder, updateQuantity } from '../../Redux/Slices/OrderSlice';
import { Person } from '../../Types/Person';


export const CartCard:React.FC<Product> = ({id, title, price, quantity, description}) => {
    const dispatch:DispatchType = useDispatch();
    const [products] = useState<Product[]>([]);
    let [quant, setQuant] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       setQuant(parseInt(e.target.value));
        console.log("total item change: " + quant) ;
    }
    
    let Equant:Equant = {
            order_id:id,
            quantity:quant
        }
    
    console.log("Equant total items: " + Equant.quantity);
    console.log("Equant id: " + Equant.order_id);

    const update = () => {
        
     console.log("Enters update function");
     dispatch(updateQuantity(Equant)).then(()=>{
        dispatch(getOrders(p.customerId));
       });
    }

    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');

    const remove = () => {
        dispatch(removeOrder(id)).then(()=>{
        dispatch(getOrders(p.customerId));
       });
    }


    useEffect(()=>{
        console.log("Enters useEffect");
        console.log("Quantity value from HTML: " + Equant);
    //    console.log("State changed in the store ", state);
    }, [products, products.length]);

    let tpriceUSD;
    tpriceUSD = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); 

    return (
        
        <div className="cartcard-container">
            <br />

            <img className='product-logo' src={logo}/>
            <p>{title}</p>
            <p>{tpriceUSD}</p>
            <p>Qty</p>
            <input className="qtyInput" id="qtyId" name="quantity" type="number" onChange={handleChange} ></input>
            <p>{description}</p>
            <button className="update-btn" onClick={update}>update</button>
            <button className="remove-btn" onClick={remove}>remove</button>
        </div>

    )
}