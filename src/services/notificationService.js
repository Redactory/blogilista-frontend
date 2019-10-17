
function showNotification(message, type, setNotificationMessage, setNotificationType) {
    setNotificationMessage(message);
    setNotificationType(type);

    setTimeout(()=> { 
        setNotificationType(''); 
        setNotificationMessage('');
    }, 5000);
};

export default {
    showNotification
};
