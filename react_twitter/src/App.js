import React, { Component } from 'react';

import './App.css';
import TweetSubmit from './components/TweetSubmit/TweetSubmit'
import Tweet from './Tweet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetSubmit />
        <Tweet />
          
      </div>
    );
  }
}

export default App;
