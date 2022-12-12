import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { forgotPassword, login, User } from '../../Redux/Slices/PersonSlice';
import './Login.css'

export const ResetPassword:React.FC = () => {

    const userState = useSelector((state:RootState) => state.auth);
    const dispatch:DispatchType = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    return(
        <div className="login">
            <h1> Please enter your new password</h1>
            <form id="auth">
                {userState.error ? <h3>Username incorrect</h3> : <></>}
                <input id= "password" name="password" placeholder="New Password"></input>
                <button id="login" className="authentication">Submit</button> 
            </form>
        </div>
    )
}

