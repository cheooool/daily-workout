import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Daily Workout</h1>
        <Auth />
      </div>
    );
  }
}

export default App;
