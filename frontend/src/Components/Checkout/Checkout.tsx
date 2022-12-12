import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import './Checkout.css';
import { Order } from '../../Types/Order';
import { OrderCard } from '../Cart/OrderCard';
import { Payment } from '../../Types/Payment';
import { PaymentCard } from './PaymentCard';
import { Link, useNavigate } from 'react-router-dom'
import { getTotalItemsCount, removeAllOrders } from '../../Redux/Slices/OrderSlice';
import { getPaymentTypes } from '../../Redux/Slices/PaymentSlice';
import { Address, Person } from '../../Types/Person';
import { updateAddress } from '../../Redux/Slices/PersonSlice';

export const Checkout:React.FC = () => {
    
    const dispatch:DispatchType = useDispatch();
    const state = useSelector((state:RootState) => state);
    const orders = useSelector((state:RootState) => state.order); 
    const payments = useSelector((state:RootState)=> state.payment);
    const p:Person = JSON.parse(localStorage.getItem("user")|| '');
    let navigate = useNavigate();
    const [paddress, setAddress] = useState<Address>({
        street:"",
        city:"",
        state:"",
        zip:0
    });

    const handleAddressInput = (e:React.ChangeEvent<HTMLInputElement>) => {
       setAddress({
            ...paddress,
            [e.target.name] : e.target.value
       });
    }

    const handlePurchase = ()=>{
        let Address:Address = {
            customer_id: p.customerId,
            street: paddress.street,
            city: paddress.city,
            state: paddress.state,
            zip: paddress.zip
        };
        
       console.log("PAddress address: " + Address);
        dispatch(updateAddress(Address));
        navigate("/checkout-complete");
    };

    const handleCancel = ()=>{
            navigate("/shop");
    };

    useEffect(()=>{
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
                <div className="payment-container">
                    <h2>Payment</h2>
                    {
                        payments.payments.map((payment:Payment)=>{
                            return <PaymentCard key={payment.paymentTypeId} paymentTypeId={payment.paymentTypeId} type={payment.type} /> 
                        })
                    }
                </div>
                <div className="address-container">
                    <h2>Mailing/Shipping Address</h2>
                    <h3>street</h3>
                    <input name="street" type="text" required onChange={handleAddressInput}/>
                    <h3>city</h3>
                    <input name="city" type="text" required onChange={handleAddressInput}/> 
                    <h3>state</h3>
                    <input name="state" onChange={handleAddressInput}/>
                    <h3>zip</h3>
                    <input name="zip" onChange={handleAddressInput}/>
                </div>
            </div>
            <div className="right-col-container">
                <div className="order-container">
                    <h2>Order Details</h2>
                    <OrderCard total_items={tquantity} total_price={tprice} />
                    <button className="checkout-option-span"  onClick={handlePurchase}>Purchase Order!</button>
                    <button className="checkout-option-span"  onClick={handleCancel}>Cancel</button>
                </div>
                

            </div>
        </div>
        </>
        
        
    )
}