import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar'
import MainCSS from './main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header-container">
          <h4 className="welcome-text"> Welcome to our Studio! </h4>
          <h1 className="greeting"> IT'S NICE TO MEET YOU </h1>
          <button className="tell-more"> TELL ME MORE </button>
        </div>
      </div>
    );
  }
}

export default App;
