import React, { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login';
import Blogs from './services/blogs';
import MainView from './components/MainView';
import loginService from './services/loginService';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  function handleUsername(event) {
    setUsername(event.target.value);
  };

  function handlePassword(event) {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({username, password});
      const blogs = await Blogs.getAll();

      setUser(user);
      setBlogs(blogs);
      setUsername('');
      setPassword('');
    } catch(error) {
      console.log('TULI ONGELMIA...');
      console.log(error);
    }
  };

  return (
    <div>
      {
        user === null ? 
        <Login
          username={username}
          password={password}
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          handleLogin={handleLogin}
        /> : 
        <MainView
        user={user}
        blogs={blogs}
        />
      }
    </div>
  )
}

export default App;
