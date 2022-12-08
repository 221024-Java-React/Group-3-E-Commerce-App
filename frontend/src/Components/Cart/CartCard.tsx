import React, { useState, useEffect } from 'react';
import { Product } from '../../Types/Product';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { updateProduct } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';
import { removeOrder } from '../../Redux/Slices/OrderSlice';

export const CartCard:React.FC<Product> = ({id, title, price, quantity, description}) => {
    const dispatch:DispatchType = useDispatch();


    const [products] = useState<Product[]>([]);

   const [quant, setQuant] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuant(parseInt(e.target.value));    
    }

    const update = () => {
  /* console.log("Enters update function");
        const prod:ItemQuantity = {
            id:id,
            quantity:quant
        }
        dispatch(updateProduct(prod));*/
    }

    const chkoutChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    }

    const remove = () => {
       // dispatch(removeOrder(id));
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
            <button className="remove-btn" onClick={remove} onChange={()=>{}} >remove</button>
        </div>

    )
}