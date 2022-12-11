import React, {useState} from 'react';
import  { useDispatch } from 'react-redux'
import { Category, Product } from '../../Types/Product';
import { DispatchType } from '../../Redux/Store';
import { addProduct } from '../../Redux/Slices/AdminSlice';
import "./Admin.css"


export const Admin: React.FC = () => {

    const dispatch:DispatchType = useDispatch();

    const cat: Category={
        productCategoryId: 0,
        category: ''
    }

    const [newProduct, setNewProduct] = useState<Product>({
        id: 0,
            title: '',
            price: 0,
            quantity: 0,
            description: '',
            category: cat
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
        <div className="adminRoot">
            
            <div className="adminContainer">
            <div className="adminForm">
            <h1>title</h1>
            <input name="title" type="text" required onChange={handleChange}/></div>
            <div className="adminForm">
            <h1>price</h1>
            <input name="price" type="text" required onChange={handleChange}/> </div>
            <div className="adminForm">
            <h1>image</h1>
            <input name="image" onChange={handleChange}/></div>
            <div className="adminForm">
            <h1>quantity</h1>
            <input name="quantity" onChange={handleChange}/></div>
            <div className="adminForm">
            <h1>description</h1>
            <input name="description" type="textarea" onChange={handleChange}/></div>
            <div className="adminForm">
            <h1>category</h1>
            <input name="category" onChange={handleChange}/></div>
            <button onClick={handleClick}>Create Product</button>
        </div>
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