import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { register, User } from '../../Redux/Slices/PersonSlice';
import  './Register.css'
import { useNavigate } from 'react-router-dom';

export const Register:React.FC = () => {

    const userState = useSelector((state:RootState) => state.auth);
    const dispatch:DispatchType = useDispatch();
    let navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        } else if(e.target.name === "name"){
            setName(e.target.value);
        }else {
            setPassword(e.target.value);
        }
    }


    useEffect(()=>{
        if(!userState.error)navigate("/login");
    }, [userState.error])

    const handleRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
       const user:User ={
           email: email,
           password: password,
           name: name
       }   
        dispatch(register(user));
    }

    return(

        

        <div className="login">
            <h1>New Customer. Please Register</h1>

            <form id="auth">
            {userState.error  ? <h3>Email Already Exist</h3> : <></>}
            <label>Name</label>
            <input id= "name" name="name" placeholder="Your name" onChange={handleChange}/>
            <label>Email</label>
            <input id= "email" name="email" placeholder="Your email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Your password" onChange={handleChange}/>
            <button id="login" className="authentication" onClick={handleRegister}>Register</button>
            </form>
        </div>
    )


}