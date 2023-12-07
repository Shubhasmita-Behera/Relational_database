// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Users from './Routes/Users';
import DishForm from './Routes/DishForm';
import ViewOrders from './Routes/View Orders';

const Navbar = () => {
  
  return (
    <nav>
      <ul>
        <li><Link to="/users"><Users /></Link></li>
        <li><Link to="/dishes"><DishForm/></Link></li>
        <li><Link to="/contact"><ViewOrders/></Link></li>
      </ul>
    </nav>
  );
};


// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><a href="/users" target="_blank" rel="noopener noreferrer">Users</a></li>
//         <li><a href="/dishes" target="_blank" rel="noopener noreferrer">Dishes</a></li>
//         <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };



export default Navbar;
