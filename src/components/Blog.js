import React from 'react'
function Blog(props){
  //console.log("BLOGIT");
  //console.log(props);
  return (
    <div>
      {props.title} {props.author}
    </div>
  )
}

export default Blog