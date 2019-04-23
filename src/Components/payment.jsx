import React, { Component } from "react";

class Payment extends Component {
  state = {
    payment: this.props    
  };

  handleDelete = () => {
    this.props.onRemoveItem(this.props.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button type="button" class="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.mode}</button>
        <button type="button" class="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.amount}</button>
        <button type="button" class="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.notes}</button>
        <button type="button" class="btn btn-danger btn-sm m-1" onClick={this.handleDelete}>Del</button>
      </div>
    );
  }
}

export default Payment;