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
                                    
  const orderState = useSelector((state:RootState) => state.order); 
  let navigate = useNavigate();
  const dispatch:DispatchType = useDispatch();
<<<<<<< HEAD
<<<<<<< HEAD
  const ordersCount = Object(JSON.stringify(localStorage.getItem("orders"))).length;
 //const ordersCount =JSON.parse(JSON.stringify(localStorage.getItem("orders"))).length;
  console.log("orders count "+ ordersCount+ " orders"+ JSON.stringify(localStorage.getItem("orders")));
=======
=======

>>>>>>> 291f2ef33f2959c33c03bb4b5257cca5ba4aefa7
 // const ordersCount = Object(JSON.stringify(localStorage.getItem("orders"))).length;
 let  ordersCount =Object.keys(JSON.parse(localStorage.getItem("orders")|| '')).length;
 //console.log("orders count "+JSON.stringify(localStorage.getItem("orders")));
  //console.log("orders count "+ ordersCount.orderId);
<<<<<<< HEAD
>>>>>>> 4504eb5835bc4a4b1a85dc15135d2845a48b94a3
=======
>>>>>>> 291f2ef33f2959c33c03bb4b5257cca5ba4aefa7

      const handleLogout = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        dispatch(logout())
        navigate("/login")
      }

      useEnhancedEffect(()=>{
        ordersCount =Object.keys(JSON.parse(localStorage.getItem("orders")|| '')).length;
      }, orderState.orders)

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
    <Link className="linkReact" to="/shop">Shop</Link>
    <Link className="linkReact" to="/notification">Notify</Link>
    <Link to="/cart"><i className="fa fa-shopping-cart"/>
    <span className='badge badge-warning' id='lblCartCount'> {ordersCount} </span></Link>
    <Link to="/profile"><i className="fa fa-user"></i></Link>
    <input type="text" onChange={handleChange} placeholder="Search.."/>
    <DarkMode />
    <button className="logoutBtn" name="logout" onClick={handleLogout}>Logout</button>
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
