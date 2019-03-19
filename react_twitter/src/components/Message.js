import React from 'react';

import './Message.css'

const Message = (props) => {
    return (
        <p>{props.userMessage}</p>
    )
}

export default Message;