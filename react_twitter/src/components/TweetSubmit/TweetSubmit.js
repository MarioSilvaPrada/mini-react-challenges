import React from 'react';
import './TweetSubmit.css';

const TweetSubmit = ({createTweet}) => {
    return (
        <div className="submit-form">
            <header>
                <img alt="logo" src="https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/twitter-logo.png" />
                <img
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    className="avatar"
                    alt="avatar" />
            </header>

            <h3>What is happening?</h3>
            <form>
                <textarea rows="4" cols="80" className="user-input"/>
                <input className="tweet-btn" type="submit" value="Tweet" onClick={createTweet}/>
            </form>

        </div>
    )
}

export default TweetSubmit;