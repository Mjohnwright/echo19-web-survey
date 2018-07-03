import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import SurveyContainer from './components/Survey/SurveyContainer';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Welcome to React
      </h1>
    </header>
    <div className="App-intro">
      <Router>
        <SurveyContainer />
      </Router>
    </div>
  </div>
);

export default App;
