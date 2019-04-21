import React, { Component } from 'react';
import './App.css';
import SideBar from "./Components/sideBar";
import Scheduler from "./Components/Scheduler";

class App extends Component {
  
  render() {
    return (
      <div className = "container-fluid">        
        <div className = "row">
            <div className="col-sm border bg-light">
                <SideBar/>
            </div>                  
        </div>      
      </div>    
    );
  }
}

export default App;
