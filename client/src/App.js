import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import SelectProduct from './components/SelectProduct';
import Facts from './components/Facts';
import Alternatives from './components/Alternatives';
import PlasticCamera from './components/PlasticCamera'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Plas-tique</h1>
          <h4>Critique your plastic usage</h4>
          <Route exact path="/" component={SelectProduct} />
          <Route path="/facts/:id" component={Facts} />
          <Route path="/alternatives/:id" component={Alternatives} />
          <Route exact path="/camera" component={PlasticCamera} />
        </div>
      </Router>
    );
  }
}

export default App;
