import React, {useState, useEffect} from 'react';
import {Product} from '../../Types/Product';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { updateProduct, removeProduct } from '../../Redux/Slices/ProductSlice';
import './CartCard.css';
import logo from '../../Assets/ecommercelogos.png';

export const CartCard:React.FC<Product> = (product) => {

    const dispatch:DispatchType = useDispatch();

    const [products, setProds] = useState<Product[]>([]);

    const [qty, setQty] = useState<number>(0);

    const update = () => {
        console.log("Enters update function");
        dispatch(updateProduct(product.id));
    }

    const remove = () => {
        dispatch(removeProduct(product.id));
    }


    useEffect(()=>{
        console.log("Enters useEffect");
        setQty(product.quantity);
        console.log("product quantity should have entered setQty");
    //    console.log("State changed in the store ", state);
    }, [products, products.length,]);

    return (
            <div className="cartcard-container">
                <br />
                <img className='product-logo' src={logo}/>
                <p>{product.title}</p>
                <p>{product.price}</p>
               <span className="dSetInnerHtml-qtyInput" dangerouslySetInnerHTML={{__html: `<input className="qtyInput" type="number" value="${product.quantity}"></input>  `}} />
                <p>{product.description}</p>
                <button className="update-btn" onClick={update}>update</button>
                <button className="remove-btn" onClick={remove}>remove</button>
            </div>)
    
    
    
}





