import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/ecommercelogos.png';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/Store';
import { logout } from '../../Redux/Slices/PersonSlice';
import { allProducts, filterProducts } from '../../Redux/Slices/ProductSlice';
import DarkMode from '../Theme/DarkMode';

export const Header:React.FC = () => {

  let navigate = useNavigate();
  const dispatch:DispatchType = useDispatch();
  
  

      const handleLogout = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        dispatch(logout())
        navigate("/login")
      }

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
  return(
<header id="header" className="header">
<div className="nav">
<img className='logo' src={logo}/>
<Link className="linkReact" to="/shop">Shop</Link>
<Link to="/cart"><i className="fa fa-shopping-cart"/></Link>
<Link to="/profile"><i className="fa fa-user"></i></Link>
<Link to="/admin">Admin</Link>
<input type="text" onChange={handleChange} placeholder="Search.."/>
<DarkMode />
<button className="logoutBtn" name="logout" onClick={handleLogout}>Logout</button>
</div>
</header>

      )
}else{
  return(
    <header id="header" className="header">
<div className="nav">
<img className='logo' src={logo}/>
<Link to="/login">Login</Link>
<Link to="/admin">Admin</Link>
<Link to="/register">Register</Link>
<DarkMode />
</div>
</header>

      )
}
   
    }


