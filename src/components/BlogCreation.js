import React from 'react';

export default function BlogCreation(props) {
    const title = props.title;
    const author = props.author;
    const url = props.url;

    return(
        <form onSubmit={props.handleCreateBlog}>
            <div>
                title:
                <input value={title} onChange={props.handleTitle}></input>
            </div>
            <div>
                author:
                <input value={author} onChange={props.handleAuthor}></input>
            </div>
            <div>
                url:
                <input value={url} onChange={props.handleUrl}></input>
            </div>
            <button type="submit">create</button>
        </form>
    );
}