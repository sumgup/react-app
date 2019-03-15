import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import FormEx from "./formEx";
import ApiCall from "./apiCall";
import Counters from "./counters";
import ModalDemo from "./modalDemo";

class NavComp extends Component {
    
      render() {
        return (
            <Router>
                <div> 
                    <ul class="nav flex-column mb-3">
                        <li class="nav-item"><Link to="/apiCall">Api Call Demo..</Link></li>
                        <li class="nav-item"><Link to="/form">Form Demo</Link></li>
                        <li class="nav-item"><Link to="/modalDemo">Modal Demo</Link></li>
                        <li class="nav-item"><Link to="/counters">Counters</Link> </li>  
                    </ul>
                    <h2>Selected Componet</h2>
                    <Route path="/apiCall" exact component={ApiCall} />
                    <Route path="/form" exact component={FormEx} />
                    <Route path="/modalDemo" exact component={ModalDemo} />
                    <Route path="/counters" exact component={Counters} />
                </div>
          </Router>
        )
      }
}

export default NavComp;  