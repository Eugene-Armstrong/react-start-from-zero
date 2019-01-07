import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SimpleLineChart} from "./rechartsDemo/SimpleLineChart";
import {SimpleBarChart} from "./rechartsDemo/SimpleBarChart";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Welcome to React.
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer">
            Learn React
          </a><br/>
        </header>
        <div style={{padding: 20}}>
          <h2>Recharts Demo</h2>
          <p>1. SimpleLineChart</p>
          <SimpleLineChart/>
          <p>2. SimpleBarChart</p>
          <SimpleBarChart/>
        </div>
      </div>
    );
  }
}

export default App;
