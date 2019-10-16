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
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  useEffect(()=> {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      handleToken(user.token);
    }
  }, []);

  function handleUsername(event) {
    setUsername(event.target.value);
  };

  function handlePassword(event) {
    setPassword(event.target.value);
  };

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleAuthor(event) {
    setAuthor(event.target.value);
  }

  function handleUrl(event) {
    setUrl(event.target.value);
  }

  function handleToken(token) {
    Blogs.setToken(token);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({username, password});
      const blogs = await Blogs.getAll();

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      setUser(user);
      setBlogs(blogs);
      setUsername('');
      setPassword('');
      handleToken(user.token);
    } catch(error) {
      console.log('TULI ONGELMIA...');
      console.log(error);
    }
  };

  const handleCreateBlog = async (event) => {
    event.preventDefault();

    const newBlogData = {title, author, url};
    const savedBlog = await Blogs.createBlog(newBlogData);

    const newBlogList = blogs.map(element => element);
    newBlogList.push(savedBlog);
    setBlogs(newBlogList);

    return savedBlog;
  }

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
        setUser={setUser}
        logout={loginService.logout}
        title={title}
        author={author}
        url={url}
        handleTitle={handleTitle}
        handleAuthor={handleAuthor}
        handleUrl={handleUrl}
        handleCreateBlog={handleCreateBlog}
        />
      }
    </div>
  )
}

export default App;
