import React from 'react';
import Blog from './Blog';
import Logout from './Logout';
import BlogCreation from './BlogCreation';
import Notification from './Notification';

function populateBlogs(blogs, adderName, setBlogs, user) {
  const blogElements = [];
  for(let i=0; i<blogs.length; i++) {
    const blog = blogs[i];
    blogElements.push(<Blog
      blog={blog}
      name={adderName}
      setBlogs={setBlogs}
      blogs={blogs}
      key={blog.id}
      loggedUser={user}
    />
    );
  }
  return blogElements;
}

const passingNotification = {
  marginBottom: '10px'
};

export default function MainView(props) {
  return (
    <div>
      <div style={passingNotification}>
        <h2>blogs</h2>
        <Notification
          notificationMessage={props.notificationMessage}
          notificationType={props.notificationType}
        />
        <span> {props.user.name} logged in</span>
        <Logout setUser={props.setUser} logout={props.logout}/>
      </div>
      <BlogCreation
        title={props.title}
        author={props.author}
        url={props.url}
        handleTitle={props.handleTitle}
        handleAuthor={props.handleAuthor}
        handleUrl={props.handleUrl}
        handleCreateBlog={props.handleCreateBlog}
        blogIsVisible={props.blogIsVisible}
        setBlogIsVisible={props.setBlogIsVisible}
        buttonText={props.buttonText}
        setButtonText={props.setButtonText}
      />
      {populateBlogs(props.blogs, props.user.name, props.setBlogs, props.user)}
    </div>
  );
}