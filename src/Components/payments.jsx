import React, { Component } from "react";
import Payment from "./payment";

class Payments extends Component {
  state = {
    payments: this.props.payments,
    newPayment: {mode: "", amount: 0}
  };
  
  removeItem = (i) => {
    console.log('remove item' + i);
    this.setState({ counters: this.state.counters.filter(o=> o.id != i)});
  }
  render() {
    return (
      <>
        <label>Payments:</label>
        <div className="form-inline">
            <input className="form-control mb-2 mr-sm-2" name="mode" type="text" value={this.state.newPayment.mode} placeholder= "Mode"/>
            <input className="form-control mb-2 mr-sm-2" name="amount" type="number" value={this.state.newPayment.amount} placeholder= "Amount"/>
            <input className="form-control mb-2 mr-sm-2" name="amount" type="text" value={this.state.newPayment.notes} placeholder= "Amount"/>
            <button className="form-control btn btn-success mb-2" onClick={this.handleDelete}>Add</button>
        </div>
        <ul className="list-group">
            {this.state.payments.map(o => (
            <Payment {...o} key={o.id} onRemoveItem={this.removeItem}/>
            ))}
        </ul>
      </>
    );
  }
}

export default Payments;