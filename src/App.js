import React, { Component } from 'react';
import logo from './logo.svg';
import './AppStyles';
import Meditate from './components/meditate/Meditate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Meditate/>
      </div>
    );
  }
}

export default App;
