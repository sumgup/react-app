import React, { Component } from 'react';

class Child extends Component {
    constructor(props)
    {
        super(props);
        this.id = props.value.state.id;
        this.state = {  
            id: this.id
        }
    }

    componentDidCatch()
    {
        console.log("componentDidCatch");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    componentDidMount()
    {
        console.log("componentDidMount");
    }

    componentWillMount()
    {
        console.log("componentWillMount");
    }

    componentWillReceiveProps()
    {
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }

    componentWillUpdate()
    {
        console.log("componentWillUpdate");
    }

    ButtonClickHandler = (obj) => {
        this.setState({ id: this.state.id + 1});
        console.log("ButtonClickHandler :", obj);
    }
    
    render() { 
        return ( 
            <div>
                <h1>{this.state.id}</h1> 
                <input type="submit" onClick={this.ButtonClickHandler.bind(this, 10)}></input>
            </div>
        );
    }
}
 
export default Child;