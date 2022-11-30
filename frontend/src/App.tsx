import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import {Header} from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Profile } from './Components/Profile/Profile';
import { Register } from './Components/Register/Register';
import { Shop } from './Components/Shop/Shop';
import { Cart } from './Components/Cart/Cart';
import { Checkout } from './Components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
      <Routes>
     
        <Route path="" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />}/>;
      </Routes>
      <Footer />
    </BrowserRouter>
    

    </div>
  );
}
export default App;
