import React from 'react';

import './Tweet.css'

import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import ActionIcon from './components/ActionIcon';
import Time from './components/Time';


const Tweet = (props) => {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <div className="header">
                    <NameWithHandle />
                    <Time />
                </div>
                <Message userMessage={props.userMessage}/>
                <ActionIcon />
            </div>
        </div>
    )
}

export default Tweet;