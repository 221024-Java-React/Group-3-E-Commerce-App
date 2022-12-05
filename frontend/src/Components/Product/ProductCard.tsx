import './ProductCard.css';
import { Product } from '../../Types/Product';

export const ProductCard:React.FC<Product> = ({id, price, title, description, }) => {
//console.log(`../../Assets/products/${id}.jpeg`);
    return (
 <div className="card">
  <img className="product_image" src={require(`../../Assets/products/${id}.jpeg`)} />
  <h1>{title}</h1>
  <p className="price">$ {price}</p>
  <p>{description}</p>
  <p><button>Add to Cart</button></p>
</div>
       
    )

}
