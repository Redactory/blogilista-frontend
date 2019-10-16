import React from 'react';
import Blog from './Blog';
import Logout from './Logout';
import BlogCreation from './BlogCreation';

function populateBlogs(blogs) {
    const blogElements = [];
    for(let i=0; i<blogs.length; i++) {
        const blog = blogs[i];
        blogElements.push(<Blog 
            title={blog.title}
            author={blog.author}
            key={blog.id}
            />
            );
    }
    return blogElements;
}

const passingNotification = {
    marginBottom: '10px'
}

export default function MainView(props) {
    return (
        <div>
            <div style={passingNotification}>
                <h2>blogs</h2>
                <span> {props.user.name} logged in</span>
                <Logout setUser={props.setUser} logout={props.logout}/>
            </div>
            <h2>create new</h2>
            <BlogCreation
                title={props.title}
                author={props.author}
                url={props.url}
                handleTitle={props.handleTitle}
                handleAuthor={props.handleAuthor}
                handleUrl={props.handleUrl}
                handleCreateBlog={props.handleCreateBlog}
            />
            {populateBlogs(props.blogs)}
        </div>
    );
}