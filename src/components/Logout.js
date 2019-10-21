import React from 'react';

// eslint-disable-next-line react/display-name
export default function(props) {
  return (
    <button onClick={() => props.logout(props.setUser)}>logout</button>
  );
}
