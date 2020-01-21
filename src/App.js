import React from 'react';
import logo from './trivia.png';
import './App.css';
import getTokenTriviaAPI from './service/APIService';
import Configurations from './Configurations';

export default function App() {
  getTokenTriviaAPI();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Configurations />
      </header>
    </div>
  );
}
