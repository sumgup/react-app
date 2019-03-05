import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormEx from "./formEx";
import ApiCall from "./apiCall";

class NavComp extends Component {
    
      render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/apiCall">Api Call</Link>
                        </li>
                        <li>
                            <Link to="/form">Form Demo</Link>
                        </li>
                        </ul>
                    </nav>
                    <Route path="/apiCall" exact component={ApiCall} />
                    <Route path="/form" exact component={FormEx} />
                </div>
          </Router>
        )
      }
}

export default NavComp;  