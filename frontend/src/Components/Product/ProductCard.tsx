import React, {useState, useEffect} from 'react';
import { Product} from '../../Types/Product';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { updateProduct, removeProduct } from '../../Redux/Slices/ProductSlice';
import './ProductCard.css';
import logo from '../../Assets/ecommercelogos.png'

export const ProductCard:React.FC = () => {

    const dispatch:DispatchType = useDispatch();

    const [style, setStyle] = useState<string>("incomplete");
    
    useEffect(()=>{
      //  finished ? setStyle("complete") : setStyle("incomplete");
    }, [])

    return (
 <div className="card">
  <img className="product_image" src={logo} alt="Denim Jeans" />
  <h1>Product title</h1>
  <p className="price">$19.99</p>
  <p>Some Description. benefits/ details</p>
  <p><button>Add to Cart</button></p>
</div>
       
    )

}
