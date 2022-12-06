import React, {useState} from 'react';
import  { useDispatch } from 'react-redux'
import { Product } from '../../Types/Product';
import { DispatchType } from '../../Redux/Store';
import { addProduct } from '../../Redux/Slices/AdminSlice';



export const Admin: React.FC = () => {

    const dispatch:DispatchType = useDispatch();

    const [newProduct, setNewProduct] = useState<Product>({
        id: 0,
            title: '',
            price: 0,
            quantity: 0,
            description: '',
            category: 0
    });


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }


    const handleClick = () => {


        const product:Product = {
            id: newProduct.id,
            title: newProduct.title,
            price: newProduct.price,
            quantity: newProduct.quantity,
            description: newProduct.description,
            category: newProduct.category
        };
        console.log(product);
        dispatch(addProduct(product));
    }

    return(
        <div className="new-product">
            <h1>title</h1>
            <input name="title" type="text" required onChange={handleChange}/>
            <h1>price</h1>
            <input name="price" type="text" required onChange={handleChange}/>
            <h1>image</h1>
            <input name="image" onChange={handleChange}/>
            <h1>quantity</h1>
            <input name="quantity" onChange={handleChange}/>
            <h1>description</h1>
            <input name="description" type="textarea" onChange={handleChange}/>
            <h1>category</h1>
            <input name="category" onChange={handleChange}/>
            <button onClick={handleClick}>Create Product</button>
        </div>
    )
    
}
    /*
    return(
        
        <div className="admin-container">
            <h1>Welcome to Admin Page</h1>
            <input type="text" placeholder="Search for Product"/>
            <h1> Add a new Product</h1>
            <div className="admin-form-group" >
                <form>
                <label>Title</label>
                <input name="title" placeholder="title" onChange={() => {}}/>
                <label>Price</label>
                <input type="number" id="price" name="price" placeholder="price" onChange={() => {}}/>
                <label>Image</label>
                <input type="image" src= "path" />
                <label>Quantity</label>
                <input type="number" id="quantity" name="quantity" placeholder="quantity" onChange={() => {}}/>
                <label>Description</label>
                <input type="text" id="description" name="description" placeholder="description" onChange={() => {}}/>
                <label>Category</label>
                <select>
                    <option>Sales</option>
                    <option>Deals</option>
                    <option>Best Selling</option>
                    <option>All products</option>
                </select>
                <button className="admin-button" onClick={() => {}}></button>
                
                </form>
            </div>
            <AdminProduct />
        </div>
        */