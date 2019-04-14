import React, { Component } from 'react';
import './App.css';
import Clock from "./Components/clock";
import NavComp from "./Components/navComp";
import Scheduler from "./Components/Scheduler";

class App extends Component {
  

  render() {
    

    return (
      <div className = "container-fluid">
        <div className = "row">
            <div className="col-sm border bg-light">
                <Clock/>
            </div> 
        </div>
        <div className = "row">
            <div className="col-sm border bg-light">
                <NavComp/>
            </div>                  
        </div>
        <div className = "row">
            <div className="col-sm border bg-light">
                <Scheduler/>
            </div>                  
        </div>        
      </div>    
    );
  }
}

export default App;
