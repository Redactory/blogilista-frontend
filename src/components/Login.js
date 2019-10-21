import React from 'react';
import Notification from './Notification'
import PropTypes from 'prop-types';

Login.propTypes = {
    handleUsername: PropTypes.func.isRequired
  }

export default function Login(props) {
    return (
        <form onSubmit={props.handleLogin}>
            <h2>Login into application</h2>
            <Notification 
                notificationMessage={props.notificationMessage}
                notificationType={props.notificationType}
            />
            <div>
                <label>Username </label>
                <input value={props.username} onChange={props.handleUsername}></input>
            </div>
            <div>
                <label>password </label>
                <input value={props.password} onChange={props.handlePassword}></input>
            </div>
            <button type="submit">login</button>
        </form>
    );
}