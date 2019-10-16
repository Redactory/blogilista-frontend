import React from 'react'
function Blog(props){
  return (
    <div>
      {props.title} {props.author}
    </div>
  )
}

export default Blog