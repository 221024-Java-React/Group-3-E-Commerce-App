import React, {useEffect} from 'react';
import {Product} from '../../Types/Product';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import { ProductCard } from '../Product/ProductCard';
import { Login } from '../Login/Login';
import image from '../../Assets/sale.png'
import './Shop.css'

export const Shop:React.FC = () => {

    const state = useSelector((state:RootState) => state);

    useEffect(()=>{
        /*
            if(localstore.get("userid")) dispatch(getUserInfo(id))
            else push to login
        */
        console.log("State changed in the store ", state);
    }, [state]);

    return (
        <div>
            <img className='heroImage' src={image}></img>


       <div className= "container">

        <div className="category">
            <h1>Categories</h1>
            <p>Sales</p>
            <p>Deals</p>
            <p>Best Selling</p>
            <p>All</p>
        </div>
       
        <div className="productcard">
        <h1 className="shoptitle">Shop</h1>
                {Array.from(Array(10), (e, i) => {
    return <ProductCard  />
  })}
                   
                    
        </div>
        </div>
        </div>
    )
}