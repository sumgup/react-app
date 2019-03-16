import React,{ Component } from "react";
import Child from "./Child";

class PassingValuestToComp extends Component {
    state = {  
        id: 10
    }
    render() { 
        return (  
            <div>
                <h1>Root</h1>
                <Child value={this}></Child>
            </div>
        );
    }
}
 
export default PassingValuestToComp;