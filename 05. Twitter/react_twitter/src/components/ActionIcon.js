import React from 'react';

const ActionIcon = () => {
    return (
        <div className="buttons">
            <i className="fas fa-reply reply-button" />
            <i className="fas fa-retweet retweet-button" />
            <i className="fas fa-heart like-button" />
            <i className="fas fa-ellipsis-h more-options-button" />
        </div>
    )
}

export default ActionIcon;