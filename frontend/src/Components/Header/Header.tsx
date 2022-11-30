import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/ecommercelogos.png';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';

export const Header:React.FC = () => {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  
  function toggleCheck() {
    setIsChecked( !isChecked);
    if(isChecked){
    document.getElementsByTagName("body")[0].style.backgroundColor= 'gray';
    document.getElementsByTagName("header")[0].style.backgroundColor= 'gray';
    document.getElementsByTagName("footer")[0].style.backgroundColor= 'gray';
  }
    else{
       document.getElementsByTagName("body")[0].style.backgroundColor= 'white';
       document.getElementsByTagName("footer")[0].style.backgroundColor= 'white';
       document.getElementsByTagName("header")[0].style.backgroundColor= 'white';
    }
      }

    return(
       //const isUserLoggedIn = true;
       //localStorage.isUserLoggedIn();
        //console.log(isUserLoggedIn);
      <header id="header" className="header">
 

  <div className="nav">
 
  <img className='logo' src={logo}/>
  <Link to="/shop" className="active">Shop</Link>
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
  <Link to="/cart"><i className="fa fa-shopping-cart"/></Link>
  <Link to="/profile"><i className="fa fa-user"></i></Link>
  <input type="text"  placeholder="Search.."/>
  <label className="switch">
  <input className="checkbox" onClick={toggleCheck} type="checkbox" checked={isChecked}/>
  <span className="slider round"></span>
</label>
</div>
  </header>

        )
    }


