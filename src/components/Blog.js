import React, { useState } from 'react';
import blogService from '../services/blogs';

function handleView(setExpandedPresentation, expandedPresentation) {
  const newValue = !expandedPresentation;
  setExpandedPresentation(newValue);
}

function divStyling() {
  const styles = {
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return styles;
}

async function incrementLikes(blogs, blogTitle, setBlogs, setExpandedPresentation) {
  for (let i=0; i<blogs.length; i++) {
    if (blogs[i].title !== blogTitle) {
      continue;
    }

    const blog = blogs[i];
    blog.likes = blog.likes + 1;

    const savedBlog = await blogService.likeBlog(blog);

    const newBlogList = [...blogs];
    newBlogList[i] = savedBlog;

    newBlogList.sort(function(a, b) {
      return b.likes - a.likes;
    });
    
    setBlogs(newBlogList);
    handleView(setExpandedPresentation, false);
  }
}

async function removeBlog(blogs, id, setBlogs) {
  if (!window.confirm('Haluatko varmasti poistaa tämän blogin?')) {
    return;
  }

  for (let i=0; i<blogs.length; i++) {
    if (blogs[i].id !== id) {
      continue;
    }

    await blogService.deleteBlog(id);

    const newBlogList = [...blogs];
    newBlogList.splice(i, 1);
    
    setBlogs(newBlogList);
  }
}

function Blog(props){
  const[expandedPresentation, setExpandedPresentation] = useState(false);

  return (
    expandedPresentation ?
    <div onClick={() => handleView(setExpandedPresentation, expandedPresentation)} style={divStyling()}>
      <div>
        {props.blog.title} {props.blog.author}
      </div>
      <div>
        {props.blog.url}
      </div>
      <div>
        {props.blog.likes} likes
        <button onClick={() => incrementLikes(props.blogs, props.blog.title, props.setBlogs, setExpandedPresentation, expandedPresentation)}>like</button>
      </div>
      <div>
        added by {props.name}
      </div>
      <button onClick={() => removeBlog(props.blogs, props.blog.id, props.setBlogs)}>remove</button>
    </div> :
    <div onClick={() => handleView(setExpandedPresentation, expandedPresentation)} style={divStyling()}>
      {props.blog.title} {props.blog.author}
    </div>
  )
}

export default Blog