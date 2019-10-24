import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
};

const clear = (props) => {
  props.username.reset();
  props.password.reset();
};

export default function Login(props) {
  return (
    <div>
      <form onSubmit={props.handleLogin}>
        <h2>Login into application</h2>
        <Notification
          notificationMessage={props.notificationMessage}
          notificationType={props.notificationType}
        />
        <div>
          <label>Username </label>
          <input value={props.username.value} onChange={props.username.onChange}></input>
        </div>
        <div>
          <label>password </label>
          <input value={props.password.value} onChange={props.password.onChange}></input>
        </div>
        <button type="submit">login</button>
      </form>
      <button onClick={() => clear(props)}>reset</button>
    </div>
  );
}