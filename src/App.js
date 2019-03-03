import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from "./Components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  render() {
    return (
      <div className = "container-fluid">
        <div className = "row">
          <div class="col-sm border bg-light">
              Component to display vertical navigation.
          </div>
          <div class="col-sm border bg-light">
            Component to display body.
          </div>
          <div className="col-sm border bg-light">
            <Counters value = {this.state.counters}></Counters>
          </div>          
        </div>
      </div>    
    );
  }
}

export default App;
