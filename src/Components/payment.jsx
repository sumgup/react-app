import React, { Component } from "react";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment: this.props    
    };

}

  handleDelete = () => {
    this.props.onDeletePayment(this.state.payment);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button type="button" className="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.mode}</button>
        <button type="button" className="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.amount}</button>
        <button type="button" className="btn btn-secondary btn-sm m-1 w-25" disabled>{this.state.payment.notes}</button>
        <button type="button" className="btn btn-danger btn-sm m-1" onClick={this.handleDelete}>Del</button>
      </div>
    );
  }
}

export default Payment;