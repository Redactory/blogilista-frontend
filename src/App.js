import React, { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login';
import Blogs from './services/blogs';
import MainView from './components/MainView';
import loginService from './services/loginService';
import notificationService from './services/notificationService';
import useField from './hooks/index';

function App() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [blogIsVisible, setBlogIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('new note');

  const usernameField = useField('text');
  const passwordField = useField('text');
  const titleField = useField('text');
  const authorField = useField('text');
  const urlField = useField('text');

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      handleToken(user.token);
    }
  }, []);

  function handleToken(token) {
    Blogs.setToken(token);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const username = usernameField.value;
      const password = passwordField.value;
      const user = await loginService.login({ username, password });
      const blogs = await Blogs.getAll();

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      blogs.sort(function(a, b) {
        return b.likes - a.likes;
      });

      setUser(user);
      setBlogs(blogs);
      usernameField.changeValue('');
      passwordField.changeValue('');
      handleToken(user.token);
    } catch(error) {
      notificationService.showNotification(error.response.data.error, 'error', setNotificationMessage, setNotificationType);

    }
  };

  const handleCreateBlog = async (event) => {
    event.preventDefault();

    const title = titleField.value;
    const author = authorField.value;
    const url = urlField.value;

    const newBlogData = { title, author, url };
    const savedBlog = await Blogs.createBlog(newBlogData);

    const newBlogList = blogs.map(element => element);
    newBlogList.push(savedBlog);
    setBlogs(newBlogList);

    const message = `a new blog ${savedBlog.title} by ${savedBlog.author} added`;
    notificationService.showNotification(message, 'passing', setNotificationMessage, setNotificationType);

    return savedBlog;
  };

  return (
    <div>
      {
        user === null ?
          <Login
            username={{ ...usernameField }}
            password={{ ...passwordField }}
            handleLogin={handleLogin}
            notificationMessage={notificationMessage}
            notificationType={notificationType}
          /> :
          <MainView
            user={user}
            blogs={blogs}
            setUser={setUser}
            logout={loginService.logout}
            titleField={titleField}
            authorField={authorField}
            urlField={urlField}
            handleCreateBlog={handleCreateBlog}
            notificationMessage={notificationMessage}
            notificationType={notificationType}
            blogIsVisible={blogIsVisible}
            setBlogIsVisible={setBlogIsVisible}
            buttonText={buttonText}
            setButtonText={setButtonText}
            setBlogs={setBlogs}
          />
      }
    </div>
  );
}

export default App;
