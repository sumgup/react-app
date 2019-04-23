import React, { Component } from "react";
import Payment from "./payment";

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payments: this.props.payments,
            newPayment: {id: 3, mode: "", amount: 0, notes:""}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddPayment = this.handleAddPayment.bind(this);
    }
  
    handleDeletePayment = (payment) => {
        let payments = this.state.payments.filter(o=> o.id != payment.id);
        this.setState({ payments: payments});
        this.props.onPaymentChange(payments);
    }

    handleAddPayment = () => {
        let payments = [...this.state.payments, this.state.newPayment];
        this.setState({ payments: payments});
        this.props.onPaymentChange(payments);
    }

    handleInputChange(e) {    
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let newPayment = {...this.state.newPayment};
        if(name === 'mode') { newPayment.mode = value}
        if(name === 'amount') { newPayment.amount = parseInt(value)}
        if(name === 'notes') { newPayment.notes = value}
        if(newPayment.id === 0) { newPayment.id = this.state.payments.max(o=> o.id)};

        this.setState({ 
            newPayment: newPayment
        });
    }  

    render() {
        return (
        <>
            <label>Payments:</label>
            <div className="form-inline">
                <input className="form-control mb-2 mr-sm-2" name="mode" type="text" value={this.state.newPayment.mode} placeholder= "Mode" onChange={this.handleInputChange}/>
                <input className="form-control mb-2 mr-sm-2" name="amount" type="number" value={this.state.newPayment.amount} placeholder= "Amount" onChange={this.handleInputChange}/>
                <input className="form-control mb-2 mr-sm-2" name="notes" type="text" value={this.state.newPayment.notes} placeholder= "Notes" onChange={this.handleInputChange}/>
                <button className="form-control btn btn-success mb-2" onClick={this.handleAddPayment}>Add</button>
            </div>
            <ul className="list-group">
                {this.state.payments.map(o => (
                <Payment {...o} key={o.id} onDeletePayment={this.handleDeletePayment}/>
                ))}
            </ul>
        </>
        );
    }
}

export default Payments;