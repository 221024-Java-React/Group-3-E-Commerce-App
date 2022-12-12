import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { forgotPassword } from '../../Redux/Slices/PersonSlice';

export const ForgotPassword:React.FC = () => {

    const userState = useSelector((state:RootState) => state.auth);
    const dispatch:DispatchType = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>(undefined);


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
            setEmail(e.target.value);
    }

    const handleForgot = () => {
        dispatch(forgotPassword(email));
        console.log("button clicked!");
  };

return(
    <div className="login">
        <h1>Please Enter your email.</h1>
        <form id="auth">
            {userState.error ? <h3>Username incorrect</h3> : <></>}
            <input id= "email" name="email" placeholder="Your email" onChange={handleChange}></input>
            <button id="login" className="authentication" onClick = {handleForgot}>Submit</button>
        </form>
    </div>
)
}
