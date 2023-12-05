import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone_num, setPhone_num] = useState();
    const handleLogin = async (e) => {
      e.preventDefault();
  
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
          <label>Phone No:-</label>
          <input type="number" value={phone_num} onChange={(e)=>{setPhone_num(e.target.value)}}/>
          <br/>
          <button type="submit">Login</button>
        </form>
       
      </div>
    
    );
  };
  
  export default Login;