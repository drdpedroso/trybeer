import React from 'react';
<<<<<<< HEAD
import logo from './trivia.png';
import './App.css';
import getTokenTriviaAPI from './service/APIService';
import Configurations from './Configurations';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
// import './App.css';
import Home from './components/Home';
>>>>>>> master

export default function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Configurations />
      </header>
    </div>
=======
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/configurations" component={Configurations}></Route> */}
        {/* <Route path="/game" component={Game}></Route> */}
        {/* <Route></Route> feedbacks */}
        {/* <Route></Route> ranking */}
      </Switch>
    </BrowserRouter>
>>>>>>> master
  );
}
