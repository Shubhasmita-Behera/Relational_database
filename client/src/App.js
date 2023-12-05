import React , { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Users from './Routes/Users';
import DishList from './Routes/DishList';
import ViewOrders from './Routes/View Orders';
import Login from './Login'
import './App.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  return (
    <Router>
      <div className='App'>
        <Navbar />  
        <Routes>
        
          <Route path="/users" element={<Users/>} />
          <Route path="/dishes" element={<DishList/>} />
          <Route path="/contact" element={<ViewOrders/>} />
         
        </Routes>
        {!loggedIn && <Login setLoggedIn={setLoggedIn}/>} {/* Conditionally render Login component */}
 
      </div>
    </Router>
  );
};

export default App;


