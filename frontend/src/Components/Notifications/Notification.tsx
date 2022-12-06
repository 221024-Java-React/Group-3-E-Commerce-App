import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import './Notification.css';


export const Notification:React.FC = () => {

    const user = useSelector
    const dispatch:DispatchType= useDispatch();
    
    useEffect(()=>{
  //  dispatch(getNotifications());

     } , []
    );

    return (
<div className="notifyContaner">

<div className= "notifyRecord">


</div>

</div>



    );
    }