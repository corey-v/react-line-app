import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import DrawingCanvas from './components/DrawingCanvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrawingCanvas />
      </div>
    );
  }
}

export default App;
