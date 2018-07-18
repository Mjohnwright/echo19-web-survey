import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SurveyContainer from './components/Survey/SurveyContainer';
import './App.css';

const App = () => (
  <div className="App">
    <nav className="navbar navbar-dark">
      <a href="/"><img className="logo" alt="srvy.link" src="/images/srvy.link_logo.png" /></a>
    </nav>
    <div className="container main-content">
      <div className="AuthenticatedContent">
        <Router>
          <SurveyContainer />
        </Router>
      </div>
    </div>
  </div>
);

export default App;
