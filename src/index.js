import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import AnimationExample from "./Components/RouterEx/AnimationExample"
import AuthExample from "./Components/RouterEx/AuthExample"
import BasicExample from "./Components/RouterEx/BasicExample"
import NoMatchExample from "./Components/RouterEx/NoMatchExample"
import ParamsExample from "./Components/RouterEx/ParamsExample"
import RouteConfigExample from "./Components/RouterEx/RouteConfigExample"
import SidebarExample from "./Components/RouterEx/SidebarExample"


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
