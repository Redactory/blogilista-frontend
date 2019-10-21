import React from 'react';

function notificationStyling(notificationType) {
  const passingNotification = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  };

  const errorNotification = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  };

  if (notificationType === 'passing') {
    return passingNotification;
  }

  if (notificationType === 'error') {
    return errorNotification;
  }

  return {};
}

export default function Notification(props) {
  return (
    <div style={notificationStyling(props.notificationType)}>
      {props.notificationMessage}
    </div>
  );
}