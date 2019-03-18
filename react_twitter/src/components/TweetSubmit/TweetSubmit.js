import React from 'react';
import style from './TweetSubmit.css'

const TweetSubmit = () => {
    return (
        <div className="submit-form">
            <header>
                <img src="https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/twitter-logo.png" />
                <img
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    className="avatar"
                    alt="avatar" />
            </header>

        <h3>What is happening?</h3>
        <form>
        <textarea rows="4" cols="80" />
        <input className="tweet-btn" type="submit" value="Tweet" />
        </form>
       
        </div>
    )
}

export default TweetSubmit;