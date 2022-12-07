import React, { useState, useEffect } from 'react';
import { Product } from '../../Types/Product';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { updateProduct, removeProduct, ItemQuantity } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';
import { removeCartItem } from '../../Redux/Slices/OrderSlice';
import { Order } from '../../Types/Order';

export const CartCard:React.FC<Order> = ({id,totalPrice, totalItem}) => {
    const dispatch:DispatchType = useDispatch();
    

    const [products, setProds] = useState<Product[]>([]);

    const [quant, setQuant] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuant(parseInt(e.target.value));    
    }

    const update = () => {
        console.log("Enters update function");

        const prod:ItemQuantity = {
            id:id,
            quantity:quant
        }

        dispatch(updateProduct(prod));
    }

    const remove = () => {
        dispatch(removeCartItem(id));
    }


    useEffect(()=>{
        console.log("Enters useEffect");
        console.log("Quantity value from HTML: " + quant);
    //    console.log("State changed in the store ", state);
    }, [quant, products, products.length]);

    return (
        
        <div className="cartcard-container">
            <br />
            <img className='product-logo' src={logo}/>
            <p>{id}</p>
            <p>{title}</p>
            <p>{price}</p>
            <input className="qtyInput" id="qtyId" name="quantity" type="number" onChange={handleChange} ></input>
            <p>{description}</p>
            <button className="update-btn" onClick={update}>update</button>
            <button className="remove-btn" onClick={remove}>remove</button>
        </div>
        
    )
}





