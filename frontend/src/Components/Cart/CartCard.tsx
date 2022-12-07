import React, { useState, useEffect } from 'react';
import { Product } from '../../Types/Product';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
<<<<<<< HEAD
import { updateProduct, removeProduct, ItemQuantity } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';
import { removeCartItem } from '../../Redux/Slices/OrderSlice';
=======
import { updateProduct } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';
import {  } from '../../Redux/Slices/OrderSlice';
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68

export const CartCard:React.FC<Product> = ({id, title, price, quantity, description}) => {
    const dispatch:DispatchType = useDispatch();
    

    const [products] = useState<Product[]>([]);

    const [quant, setQuant] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuant(parseInt(e.target.value));    
    }

    const update = () => {
<<<<<<< HEAD
        console.log("Enters update function");
=======
       /* console.log("Enters update function");
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68

        const prod:ItemQuantity = {
            id:id,
            quantity:quant
        }

<<<<<<< HEAD
        dispatch(updateProduct(prod));
    }

    const remove = () => {
        dispatch(removeCartItem(id));
=======
        dispatch(updateProduct(prod));*/
    }

    const remove = () => {
      //  dispatch(removeCartItem(id));
>>>>>>> 954306fe9a76b41928e46bbabdaa0be7c3661a68
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
