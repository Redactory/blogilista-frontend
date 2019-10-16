import React from 'react';

export default function(props) {
    return (
        <button onClick={() => props.logout(props.setUser)}>logout</button>
    );
}
