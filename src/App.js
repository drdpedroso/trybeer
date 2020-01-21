import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
// import './App.css';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/configurations" component={Configurations}></Route> */}
        {/* <Route path="/game" component={Game}></Route> */}
        {/* <Route></Route> feedbacks */}
        {/* <Route></Route> ranking */}
      </Switch>
    </BrowserRouter>
  );
}
