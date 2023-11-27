// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Users from './Routes/Users';
import DishList from './Routes/DishList';
import ViewOrders from './Routes/View Orders';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/users"><Users /></Link></li>
        <li><Link to="/dishes"><DishList/></Link></li>
        <li><Link to="/contact"><ViewOrders/></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
