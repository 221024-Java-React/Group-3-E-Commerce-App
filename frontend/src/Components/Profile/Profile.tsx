import React, { useState } from 'react';

import { Person, Role, Theme } from '../../Types/Person';
import { updateProfile } from '../../Redux/Slices/ProfileSlice';
import { DispatchType } from '../../Redux/Store';
import { useDispatch } from 'react-redux';
import "./Profile.css"


export const Profile:React.FC = () => {

    const dispatch:DispatchType = useDispatch();
    
    const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
    
    const r :Role={
        roleId: 0,
        role: ""
    }
    
    const t :Theme={
        themeId: 0,
        theme: ""
    }


    const [newPerson, setNewPerson] = useState<Person>({
        customerId: 0,
        name: "",
        email: "",
        password: "",
        phone: "",
        image: "",
        theme: t,
        role: r,
        orders: []
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewPerson({
            ...newPerson,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdate = () => {
        const person:Person = {
            customerId: newPerson.customerId,
            name: newPerson.name,
            email: newPerson.email,
            password: newPerson.password,
            phone: newPerson.phone,
            image: newPerson.image,
            theme: newPerson.theme,
            role: newPerson.role,
            orders: newPerson.orders
        };

        dispatch(updateProfile(person));
    }

    const initialState = {
        receipts:[]
    };

    return (
        <div className='ProfileRoot'>
            
            <div className="profileContainer">
                
                <div className='profileForm'>
                <p>Name</p>
                <input name="name" placeholder={`${p.name}`} type="text" onChange={handleChange}/></div>
                <div className='profileForm'>
                <p>Email</p>
                <input name="email" placeholder={`${p.email}`}type="text" onChange={handleChange}/></div>
                <div className='profileForm'>
                <p>Password</p>
                <input name="password" placeholder={`${p.password}`}type="password" onChange={handleChange}/>
                </div>
                <div className='profileForm'>
                <p>Phone</p>
                <input name="phone" placeholder={`${p.phone}`} type="text" onChange={handleChange}/></div>

                <button onClick={handleUpdate}>Save</button>
            </div>
            </div>
           
    )
    /*

    async function getReceipts() {
        try {




   
const ReceiptCard: React.FC<Receipt> = ({ items, userId, receiptNumber: receiptId, dateTime: date, total }) => {

    const totalPrice = (items: Items[]) => {
        let total = 0;
        for (let i: number = 0; i < items.length; i++) {
            total += items[i].amount * items[i].price;
            console.log(total)
        }
        return total;
    }

    return (
        <div>
            <h1>Receipt ID: {receiptId}</h1>
            <h1>{date}</h1>
            <body>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index} >{item.amount} x {item.name}</li>
                        )
                    })
                }
            </body>
            <h2>
                Total Price: ${total}
            </h2>
        </div>
    )
}

export default ReceiptCard

    


    export const ViewReceipts:React.FC = () => {

        const [receipts, setReceipts] = useState<Order[]>([]);
        const [userId, setUserId] = useState<number>(7);
        const [role, setRole] = useState<string>("customer");
    
        useEffect(() => {
      
            axios.get(`http://localhost:8500/receipts/?id=${localStorage.getItem("userId")}`)
                .then(response => setReceipts(response.data));
    
        }, []);

return (
        <div>
            <h1>Receipts</h1>
            { 
                receipts.map((receipt) => {
                    receiptId={receipt.receiptId}
                    person={receipt.person}
                    product={receipt.product}
                    registeredAt={receipt.registeredAt}
                    totalPrice={receipt.totalPrice}
                    totalItem={receipt.totalItem}
                    OrderStatus={receipt.OrderStatus}
                    paymentType={receipt.paymentType}

                })
            }
        </div>
);


}

*/
}
