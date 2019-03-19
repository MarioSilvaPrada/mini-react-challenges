import React, { Component } from 'react';

import './App.css';
import TweetSubmit from './components/TweetSubmit/TweetSubmit'
import Tweet from './Tweet';

class App extends Component {

  state = {
    tweet: []
  }

  createTweet = (e) => {
    e.preventDefault();

    let userInput = document.querySelector('.user-input').value;

    this.setState(state => ({
      tweet: [...state.tweet, userInput]
    }))
    

    document.querySelector('.user-input').value = "";
  }
  render() {

    const usermsg = this.state.tweet.map(msg => {
      return <Tweet userMessage = {msg}/>
    })

    return (
      <div className="App">
        <TweetSubmit createTweet={this.createTweet}/>

        {usermsg}
          
      </div>
    );
  }
}

export default App;
