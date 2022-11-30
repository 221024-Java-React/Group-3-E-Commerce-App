import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import './Checkout.css';


export const Checkout:React.FC = () => {

    const state = useSelector((state:RootState) => state);

    useEffect(()=>{
        /*
            if(localstore.get("userid")) dispatch(getUserInfo(id))
            else push to login
        */
        console.log("State changed in the store ", state);
    }, [state]);

    return (
        <div className="checkout-container">
            <h1>Checkout Page</h1>
        </div>
    )
}