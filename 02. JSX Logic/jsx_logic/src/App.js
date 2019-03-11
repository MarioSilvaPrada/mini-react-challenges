import React, { Component } from 'react';
import './App.css';

import Button from './button'

class App extends Component {

  state = {
    isLoggedIn: false
  }

  btnToggle = () => {
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false })
    }
    else {
      this.setState({ isLoggedIn: true })
    }
  }

  render() {
    let message = "I'm not here right now";

    if (this.state.isLoggedIn) {
      message = 'Hello World, my name is Mário'
    }

    return (
      <div>
        <h1>{message}</h1>
        <Button click={this.btnToggle} />
      </div>
    );
  }
}

export default App;
