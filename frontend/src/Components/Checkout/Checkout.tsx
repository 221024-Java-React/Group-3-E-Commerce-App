import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import './Checkout.css';
import { Order } from '../../Types/Order';
import { OrderCard } from '../Cart/OrderCard';
import { Payment } from '../../Types/Payment';
import { PaymentCard } from './PaymentCard';
import { Link, useNavigate } from 'react-router-dom'
import { getTotalItemsCount, removeAllOrders, updateAddress } from '../../Redux/Slices/OrderSlice';
import { getPaymentTypes } from '../../Redux/Slices/PaymentSlice';
import { Person } from '../../Types/Person';
import { PAddress } from '../../Types/PAddress';

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const orders = useSelector((state:RootState) => state.order); 
    const payments = useSelector((state:RootState)=> state.payment);
    const p:Person = JSON.parse(localStorage.getItem("user")|| '');
    let navigate = useNavigate();
    let [address, setAddress] = useState<string>("");
    let [city, setCity] = useState<string>("");
    let [pstate, setState] = useState<string>("");
    let [zip, setZip] = useState<number>(0);

    const handleAddressInput = (e:React.ChangeEvent<HTMLInputElement>) => {
       setAddress(e.target.value);
       setCity(e.target.value);
       setState(e.target.value);
       setZip(parseInt(e.target.value));
    }
    
    let PAddress:PAddress = {
            customer_id:p.customerId,
            address:address,
            city:city,
            state:pstate,
            zip:zip
        }

    console.log("PAddress: " + PAddress);
    const handlePurchase = ()=>{
        dispatch(updateAddress(PAddress));
        //dispatch(removeAllOrders(p.customerId));
    };

    const handleCancel = ()=>{
        let response = window.confirm("Do you want to proceed?");
        if (response === true) {
            navigate("/shop");
            dispatch(removeAllOrders(p.customerId));
        }
    };
    
    useEffect(()=>{

        dispatch({ type: 'REFRESH_PAGE' });
        if(payments.payments.length===0){
            dispatch(getPaymentTypes()).then(()=>{
                dispatch(getTotalItemsCount(p.customerId));
            });
        }
    }, [dispatch, payments.payments.length]);

    let tprice = 0
    let tquantity = 0;

    orders.orders.map((order:Order)=>{
       tquantity += (order.totalItem);
       return tquantity;
    })

    orders.orders.map((order:Order)=>{

        console.log("order inside map: " + order.product.quantity);
        tprice = tprice + (order.product.price * order.totalItem);
        return tprice;});

    console.log("total price: " + tprice);
    console.log("total quantity: " + tquantity);
    console.log(payments);
    console.log("orders: " + state.order.orders);

    return (
        
        <>
        <h1 className="checkout-title">Checkout Page</h1>     
        <div className="checkout-container">
            <div className="left-col-container">
                <div className="order-container">
                    <h2>Order Details</h2>
                    <OrderCard total_items={tquantity} total_price={tprice} />
                </div>
                <div className="address-container">
                    <h2>Mailing/Shipping Address</h2>
                    <div className="address-form">
                    <label>Address:</label>
                    <input className="address-input" type="text" name="address" onChange={handleAddressInput}/>
                    <label>City:</label>
                    <input className="address-input" type="text" name="city" onChange={handleAddressInput}/>
                    <label>State:</label>
                    <input className="address-input" type="text" name="state" onChange={handleAddressInput}/>
                    <label>Zipcode:</label>
                    <input className="address-input" type="text" name="zip" onChange={handleAddressInput}/>
                    <br/>
                    </div>
                </div>
            </div>

            <div className="right-col-container">
                <div className="payment-container">
                    <h2>Payment</h2>
                    {
                        payments.payments.map((payment:Payment)=>{
                            return <PaymentCard key={payment.paymentTypeId} paymentTypeId={payment.paymentTypeId} type={payment.type} /> 
                        })
                    }
                    <span className="checkout-option-span"><Link to="/checkout-complete" onClick={handlePurchase}>Purchase Order!</Link></span>
                    <span className="checkout-option-span"><Link to="/" onClick={handleCancel}>Cancel</Link></span>
                </div>

            </div>
        </div>
        </>
        
        
    )
}