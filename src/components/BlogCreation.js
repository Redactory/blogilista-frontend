import React from 'react';

function handleShowing(blogIsVisible, setBlogIsVisible, setButtonText) {
  const newValue = !blogIsVisible;
  const buttonText = newValue ? 'cancel' : 'new note';

  setBlogIsVisible(newValue);
  setButtonText(buttonText);
}

const clear = (props) => {
  props.titleField.reset();
  props.authorField.reset();
  props.urlField.reset();
};

export default function BlogCreation(props) {
  const isVisible = { display: props.blogIsVisible ? '' : 'none' };

  return(
    <div>
      <form onSubmit={props.handleCreateBlog} style={isVisible}>
        <h2>create new</h2>
        <div>
                    title:
          <input value={props.titleField.value} onChange={props.titleField.onChange}></input>
        </div>
        <div>
                    author:
          <input value={props.authorField.value} onChange={props.authorField.onChange}></input>
        </div>
        <div>
                    url:
          <input value={props.urlField.value} onChange={props.urlField.onChange}></input>
        </div>
        <button type="submit">create</button>
      </form>
      <button onClick={() => clear(props)} style={isVisible}>reset</button>
      <button onClick={() => handleShowing(props.blogIsVisible, props.setBlogIsVisible, props.setButtonText)}>{props.buttonText}</button>
    </div>
  );
}