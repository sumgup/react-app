import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ApiCall from "./apiCall";
import Rooms from "./rooms";
import Scheduler from "./Scheduler";

class SideBar extends Component {
    
      render() {
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "10px", width: "8%", background: "black", fontWeight: "bold" }}>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li><h6><div style={{ color: "white"}}> Menu Items</div></h6></li>
                            <li><Link to="/scheduler">Scheduler</Link></li>                          
                            <li><Link to="/hotelSetting">Hotel Setting</Link></li>
                            <li><Link to="/rooms">Rooms</Link> </li>  
                        </ul>
                    </div>
                    <div style={{ flex: 1, padding: "10px" }}>                        
                        <div className="col-sm border bg-light">
                            <Route path="/" exact component={Scheduler} />
                            <Route path="/scheduler" exact component={Scheduler} />
                            <Route path="/hotelSetting" exact component={ApiCall} />
                            <Route path="/rooms" exact component={Rooms} />                                
                        </div>                           
                    </div>
                </div>
          </Router>
        )
      }
}

export default SideBar;  