import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log("LogIn true");
     
  
      try {
        const response = await axios.post('http://localhost:4000/adduser', {
          username,
          password,
          phone_num
        });
  
        console.log('Server Response:', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    return (
  
      <div className='App'>
      
        <h2>Welcome to ColabKitchen</h2>
        <form  onSubmit={handleLogin}>
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
       
      </div>
    
    );
  };
  
  export default Login;