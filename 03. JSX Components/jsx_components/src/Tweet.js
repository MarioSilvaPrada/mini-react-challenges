import React from 'react';

import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import ActionIcon from './components/ActionIcon';
import Time from './components/Time';


const Tweet = () => {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <div className="header">
                    <NameWithHandle />
                    <Time />
                </div>
                <Message />
                <ActionIcon />
            </div>
        </div>
    )
}

export default Tweet;