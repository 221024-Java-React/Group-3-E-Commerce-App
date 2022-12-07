import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import {  login, User } from '../../Redux/Slices/PersonSlice';
import  './Login.css'
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../Redux/Slices/ProductSlice';
import { Person } from '../../Types/Person';

export const Login:React.FC = () => {
    let navigate = useNavigate();
    const userState = useSelector((state:RootState) => state.auth);
    const dispatch:DispatchType = useDispatch();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    useEffect(()=>{
        if(userState.isLoggedIn)
        {
            const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
            if(p.role.roleId===1)
        navigate("/admin");
        else  navigate("/shop");
        
        }
        console.log(localStorage.getItem('customerId'));
    }, [userState.isLoggedIn])

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
       const user:User ={
           email: email ,
           password: password
           }   
        dispatch(login(user)).then(()=>{
            dispatch(allProducts());
        });
  };
    
 

    return(

        

        <div className="login">
            <h1>Welcome to Ecommerce. Please Login</h1>

            <form id="auth">
            {userState.error ? <h3>Username or password incorrect</h3> : <></>}
            <label>Email</label>
            <input id= "email" name="email" placeholder="Your email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Your password" onChange={handleChange}/>
            <button id="login" className="authentication" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )


}