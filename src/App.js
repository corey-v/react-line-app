import React, { Component } from 'react';
import DrawingCanvas from './components/DrawingCanvas';
import './App.css';
import github from './GitHub-Mark-32px.png';
import linkedin from './In-Black-34px.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple react line canvas app</h1>
        <h2>By: Corey Valentyne</h2>
        <a href="https://www.github.com/corey-v"><img src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/corey-valentyne"><img src={linkedin} alt="linkedin" /></a>
        <DrawingCanvas />
      </div>
    );
  }
}

export default App;
