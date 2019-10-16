import React from 'react';
import Blog from './Blog';

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
                <h2>Blogs</h2>
                <span> {props.user.name} logged in</span>
            </div>
            {populateBlogs(props.blogs)}
        </div>
    );
}