import React from 'react';

function handleShowing(blogIsVisible, setBlogIsVisible, setButtonText) {
  const newValue = !blogIsVisible;
  const buttonText = newValue ? 'cancel' : 'new note';

  setBlogIsVisible(newValue);
  setButtonText(buttonText);
}

export default function BlogCreation(props) {
  const title = props.title;
  const author = props.author;
  const url = props.url;
  const isVisible = { display: props.blogIsVisible ? '' : 'none' };

  return(
    <div>
      <form onSubmit={props.handleCreateBlog} style={isVisible}>
        <h2>create new</h2>
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
      <button onClick={() => handleShowing(props.blogIsVisible, props.setBlogIsVisible, props.setButtonText)}>{props.buttonText}</button>
    </div>
  );
}