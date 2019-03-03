import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    // The componentDidMount() method runs after the component output has been rendered to the DOM.
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    //it’s very important to free up resources taken by the components when they are destroyed.
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      // Three important points -
      // 1. Do Not Modify State Directly, Instead, use setState(). The only place where you can assign this.state is the constructor.
      // 2. State Updates May Be Asynchronous.use a second form of setState() that accepts a function rather than an object. 
      // That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
      // this.setState((state, props) => ({
      //     counter: state.counter + props.increment
      //  }));
      // 3. When you call setState(), React merges the object you provide into the current state.
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;  