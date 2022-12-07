import './ProductCard.css';
import { Product } from '../../Types/Product';
import { useNavigate } from 'react-router-dom';
import { DispatchType, RootState } from '../../Redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { OrderDetail } from '../../Types/OrderDetail';
import { createOrder } from '../../Redux/Slices/OrderSlice';
import { Person } from '../../Types/Person';

export const ProductCard:React.FC<Product> = ({id, price, title, description,quantity }) => {
//console.log(`../../Assets/products/${id}.jpeg`);
let navigate = useNavigate();
const userState = useSelector((state:RootState) => state.auth);
const dispatch:DispatchType = useDispatch();



useEffect(()=>{
    if(userState.isLoggedIn)navigate("/shop");
console.log(localStorage.getItem('customerId'));
}, [userState.isLoggedIn])
const user = JSON.parse(localStorage.getItem("user")|| '{}');
console.log(user);
const handleAddToCard = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   const order:OrderDetail ={
       person_id: user.customerId,
       product_id: id,
       status_id: 1,
       payment_id: 1,
       total_price: price,
       total_items: 1,
   }   
    dispatch(createOrder(order));
};



    return (
 <div className="card">
  <img className="product_image" src={require(`../../Assets/products/${id}.jpeg`)} />
  <h1>{title}</h1>
  <p className="price">$ {price}</p>
  <p className="price">In stock {quantity} items</p>
  <p>{description}</p>
  <p><button onClick={handleAddToCard}>Add to Cart</button></p>
</div>
       
    )

}
