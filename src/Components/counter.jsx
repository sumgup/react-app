import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value    
  };
  
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleDelete = () => {
    this.props.onRemoveItem(this.props.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className="badge badge-primary m-2">{this.state.count}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrement}>+</button>
        <button className="btn btn-danger m-2" onClick={this.handleDecrement}>-</button>
        <button className="btn btn-danger m-2" onClick={this.handleDelete}>Del</button>
      </div>
    );
  }
}

export default Counter;
