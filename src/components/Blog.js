import React, { useState } from 'react';

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

function Blog(props){
  const[expandedPresentation, setExpandedPresentation] = useState(false);

  return (
    expandedPresentation ?
    <div onClick={() => handleView(setExpandedPresentation, expandedPresentation)} style={divStyling()}>
      <div>
        {props.title} {props.author}
      </div>
      <div>
        {props.url}
      </div>
      <div>
        {props.likes} likes
        <button>like</button>
      </div>
      <div>
        added by {props.name}
      </div>
    </div> :
    <div onClick={() => handleView(setExpandedPresentation, expandedPresentation)} style={divStyling()}>
      {props.title} {props.author}
    </div>
  )
}

export default Blog