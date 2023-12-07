// import React , { useState }  from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './navbar';
// import Users from './Routes/Users';
// import DishForm from './Routes/DishForm';
// import ViewOrders from './Routes/View Orders';
// import Login from './Login'
// import './App.css'

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false); // State to track login status
//   console.log("the Login state is ",loggedIn);
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar />  
//         <Routes>
        
//           <Route path="/users" element={<Users/>} />
//           <Route path="/dishes" element={<DishForm/>} />
//           <Route path="/contact" element={<ViewOrders/>} />
         
//         </Routes>
//         {!loggedIn && <Login setLoggedIn={setLoggedIn}/>} {/* Conditionally render Login component */}
        
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import DishForm from './Routes/DishForm';
import Users from './Routes/Users';
import ViewOrders from './Routes/View Orders';
// Mock components for demonstration
const Home = () => <div>Home Page</div>;
// const Users = () => <div>Users Page</div>;
// const DishList = () => <div>Dishes Page</div>;
// const ViewOrders = () => <div>View Orders Page</div>;
const Dashboard = () => <div>Dashboard - Logged In</div>;


// Login component with mock functionality and dynamic heading
const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
   
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggedIn(true); // Simulate successful login
    setIsLoginSuccessful(true); // Update local state to indicate successful login
  
  try {
    const response = await axios.post('http://localhost:4000/adduser', {
      username,
      password
     
    });

    console.log('Server Response:', JSON.stringify(response.data));
  } catch (error) {
    console.error('Error:', error.message);
  }
  };

  return (
    <div className='App'>
      <h2>{isLoginSuccessful ? 'You are in ColabKitchen' : 'Welcome to ColabKitchen'}</h2>
      {!isLoginSuccessful && ( // Only show the login button if not logged in
        <form onSubmit={handleLogin}>
           <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

//--

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false); // Update the loggedIn state to false
    <Navigate to="/login" />
  };

  return (
    <nav>
      <ul type="none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/dishes">Dishes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {loggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

// PrivateRoute component
const PrivateRoute = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className='App'>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/users" element={<PrivateRoute loggedIn={loggedIn}><Users /></PrivateRoute>} />
          <Route path="/dishes" element={<PrivateRoute loggedIn={loggedIn}><DishForm/></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute loggedIn={loggedIn}><ViewOrders /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute loggedIn={loggedIn}><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;


