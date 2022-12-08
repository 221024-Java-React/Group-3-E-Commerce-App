import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/ecommercelogos.png';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/Store';
import { allProducts, filterProducts } from '../../Redux/Slices/ProductSlice';
import DarkMode from '../Theme/DarkMode';
import { Person } from '../../Types/Person';
import { logout } from '../../Redux/Slices/PersonSlice';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';

export const Header:React.FC = () => {
                                    
  let navigate = useNavigate();
  const dispatch:DispatchType = useDispatch();

      const handleLogout = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        dispatch(logout())
        navigate("/login")
      }


      const orders = useSelector((state:RootState) => state.order); 
      const notifications = useSelector((state:RootState) => state.notify); 

      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue !== "") {
          console.log(inputValue);
          dispatch(filterProducts(inputValue));
        } else {
          console.log("inside input value =  ");
          dispatch(allProducts());
        }
      };

if(localStorage.getItem("user")!=null)
{

 const p:Person=  JSON.parse(localStorage.getItem("user")|| '');
 console.log("header person data "+p['email']);
 console.log("header person.email data "+p.role.roleId);
 
 if(p.role.roleId ===1)
 {
  return(
    <header id="header" className="header">
    <div className="nav">
    <img className='logo' src={logo}/>
    <DarkMode />
    <Link to="/admin">Admin</Link>
    <button className="logoutBtn" name="logout" onClick={handleLogout}>Logout</button>
    </div>
    </header>
    
          )
 }else {
  return(
    <header id="header" className="header">
    <div className="nav">
    <img className='logo' src={logo}/>
  
    <Link to="/shop"><i className="fa fa-home linkReact"></i></Link>
    <Link to="/cart"><i className="fa fa-shopping-cart"/>
    <span className='badge badge-warning' id='lblCartCount'> {orders.orders.length} </span></Link>
    <Link to="/notification"><i className="fa fa-bell linkReact"/>
    <span className='badge badge-warning' id='lblCartCount'> {notifications.notifications.length} </span></Link>
    <Link to="/profile"><i className="fa fa-user"></i></Link>
    <input type="text" onChange={handleChange} placeholder="Search.."/>
    
    <button className="fa fa-sign-out logoutBtn" name="logout" onClick={handleLogout}></button>
    <DarkMode />
    </div>
    </header>
    
          )
 }

}else{
  return(
    <header id="header" className="header">
<div className="nav">
<img className='logo' src={logo}/>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
<DarkMode />
</div>
</header>

      )
}
   
    }


