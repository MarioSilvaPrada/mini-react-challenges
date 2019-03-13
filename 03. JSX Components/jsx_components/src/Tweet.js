import React from 'react';

import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import LikeButton from './components/ActionIcons/LikeButton';
import MoreOptionsButton from './components/ActionIcons/MoreOptionsButton';
import ReplyButton from './components/ActionIcons/ReplyButton';
import RetweetButton from './components/ActionIcons/RetweetButton';


const Tweet = () => {
    return (
        <div className = "tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle />
                <Message />
            </div>
            <div className="buttons">
                <ReplyButton />
                <RetweetButton />
                <LikeButton />
                <MoreOptionsButton />
            </div>
        </div>
    )
}

export default Tweet;