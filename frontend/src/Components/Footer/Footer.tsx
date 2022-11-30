import React, { Component } from 'react'
import './Footer.css'
import logo from '../../Assets/ecommercelogos.png'
export const Footer:React.FC = () => {
        return (
          
            <footer className="footer">

<div className="footerAddress">
            <img className="footerLogo" src={logo} />
                  
             
            </div>

            <div className="footerAddress">
                  
              <h2>Contact Us</h2>
              
              <address>
                <p>Email: support@ecommerce.com</p>
                <p>Phone: 313-585-5914</p>
                    
              </address>
            </div>

           
            
            <ul className="footerNav">
              <li className="navItem">
                <h2 className="navTitle">Pages</h2>
          
                <ul className="navUl">
                  <li>
                    <a href="#">Shop</a>
                  </li>
          
                  <li>
                    <a href="#">Cart</a>
                  </li>
                      
                  <li>
                    <a href="#">Profile</a>
                  </li>
                </ul>
              </li>
              
             
             

              
              <li className="navItem">
                <h2 className="navTitle">Legal</h2>
                
                <ul className="navUl">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </li>
            </ul>
            
            <div className="legal">
              <p>&copy; 2022 Ecommerce. All rights reserved.</p>
              
             
            </div>
          </footer>
      
        );
    }    
export default Footer