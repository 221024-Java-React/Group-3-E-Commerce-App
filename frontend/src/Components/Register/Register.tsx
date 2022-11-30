import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { login, User } from '../../Redux/Slices/PersonSlice';
import  './Register.css'

export const Register:React.FC = () => {

    const userState = useSelector((state:RootState) => state.user);
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


    const handleLogin = () => {
       const user:User ={
           email: email ,
           password: password
           }   
        dispatch(login(user));
    }

    return(

        

        <div className="login">
            <h1>New Customer. Please Register</h1>

            <form id="auth">
            {userState.error ? <h3>Username or password incorrect</h3> : <></>}
            <label>Name</label>
            <input id= "name" name="name" placeholder="Your name" onChange={handleChange}/>
            <label>Email</label>
            <input id= "email" name="email" placeholder="Your email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Your password" onChange={handleChange}/>
            <button id="login" className="authentication" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )


}