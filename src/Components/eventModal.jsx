import React, { Component } from "react";
import {Form, Button, Col, Modal} from 'react-bootstrap';
import {GetEventData, ComputeCharge} from "../Services/eventService.js";
import Payments from "./payments";

class EventModal extends Component {
    constructor(props) {
      super(props);
      let data = GetEventData();            
      let computedData = ComputeCharge(data.event.roomRate, data.event.discount, data.event.checkinDate, data.event.checkoutDate, data.payments);
      this.state = {      
        selectedEvent: this.props.selectedEvent,
        event : data.event,
        guest : data.guest,
        room : data.room,
        payments : data.payments,
        computedData : computedData
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleRoomRateChange = this.handleRoomRateChange.bind(this);
      this.handleDiscountChange = this.handleDiscountChange.bind(this);
      this.handleCheckinDateChange = this.handleCheckinDateChange.bind(this);
      this.handleCheckoutDateChange = this.handleCheckoutDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePaymentChange = this.handlePaymentChange.bind(this);
    }

    handleCheckinDateChange(e) { 
      const value = e.target.value;
      let computedData = ComputeCharge(this.state.event.roomRate, this.state.event.discount, value, this.state.event.checkoutDate, this.state.payments);
      let event = {...this.state.event};
      event.checkinDate = value;
      
      this.setState({ 
        computedData: computedData,        
        event : event
      });
    }

    handleCheckoutDateChange(e) { 
      const value = e.target.value;
      let computedData = ComputeCharge(this.state.event.roomRate, this.state.event.discount, this.state.event.checkinDate, value, this.state.payments);
      let event = {...this.state.event};
      event.checkoutDate = value;
      
      this.setState({ 
        computedData: computedData,        
        event : event
      });
    }

    handleRoomRateChange(e) { 
      const value = e.target.value;
      let computedData = ComputeCharge(value, this.state.event.discount, this.state.event.checkinDate, this.state.event.checkoutDate, this.state.payments);
      let event = {...this.state.event};
      event.roomRate = value;
      
      this.setState({ 
        computedData: computedData,        
        event : event
      });
    }

    handleDiscountChange(e) { 
      const value = e.target.value;
      let computedData = ComputeCharge(this.state.event.roomRate, value, this.state.event.checkinDate, this.state.event.checkoutDate, this.state.payments);
      let event = {...this.state.event};
      event.discount = value;
      
      this.setState({ 
        computedData: computedData,        
        event : event
      });
    }

    handlePaymentChange(payments) {
      console.log(payments);
      let computedData = ComputeCharge(this.state.event.roomRate, this.state.event.discount, this.state.event.checkinDate, this.state.event.checkoutDate, payments);
      this.setState({ 
        computedData: computedData
      });
    }

    handleInputChange(e) {    
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      let room = {...this.state.room};
      let guest = {...this.state.guest};
      if(name === 'guestName') { guest.name = value}
      if(name === 'guestEmail') { guest.email = value}
      if(name === 'guestPhone') { guest.phone = value}
      if(name === 'guestAddress') { guest.address = value}
      if(name === 'roomNumber') { room.number = value}
      if(name === 'guestCounts') { room.guestCounts = value}

      this.setState({ 
        room: room,        
        guest : guest
      });
    }  

    handleSubmit(event) {    
      console.log("submit");
    }

    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {this.props.selectedevent.text}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                  <h6><span>Guest Name:</span></h6>
                  <input className="form-control" name="guestName" type="text" value={this.state.guest.name} onChange={this.handleInputChange} />                 
                </div>
                <div className="col-md-4 mb-3">
                  <h6><span>Email:</span></h6>
                  <input className="form-control" name="guestEmail" type="email" value={this.state.guest.email} onChange={this.handleInputChange} />                
                </div>
                <div className="col-md-4 mb-3">                  
                  <h6><span>Phone:</span></h6>
                  <input className="form-control" name="guestPhone" type="text" value={this.state.guest.phone} onChange={this.handleInputChange} />               
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-12 mb-3">
                  <h6><span>Address:</span></h6>
                  <input className="form-control" name="guestAddress" type="text" value={this.state.guest.address} onChange={this.handleInputChange} />                  
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                  <h6><span>Checkin Date:</span></h6>
                  <input className="form-control" name="checkinDate" type="date" value={this.state.event.checkinDate} onChange={this.handleCheckinDateChange} />             
                </div>
                <div className="col-md-6 mb-3">
                  <h6><span>Checkout Date:</span></h6>
                  <input className="form-control" name="checkoutDate" type="date" value={this.state.event.checkoutDate} onChange={this.handleCheckoutDateChange} />                
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3 mb-3">
                  <h6><span>Room:</span></h6>
                  <input className="form-control" name="roomNumber" type="text" value={this.state.room.number} onChange={this.handleInputChange} />                  
                </div>
                <div className="col-md-3 mb-3">
                  <h6><span>Guest Count:</span></h6>
                  <input className="form-control" name="guestCounts" type="number" value={this.state.room.guestCounts} onChange={this.handleInputChange} />                  
                </div>
                <div className="col-md-3 mb-3">
                  <h6><span>Discount(%):</span></h6>
                  <input className="form-control" name="discount" type="number" value={this.state.event.discount} onChange={this.handleDiscountChange} />                 
                </div>   
                <div className="col-md-3 mb-3">
                  <h6><span>Room Rate:</span></h6>
                  <input className="form-control" name="roomRate" type="number" value={this.state.event.roomRate} onChange={this.handleRoomRateChange} />                  
                </div>             
            </div>
            <div className="form-row">
                <div className="col-md-12 mb-3">                    
                    <Payments payments={this.state.payments} onPaymentChange={this.handlePaymentChange}/>
                </div>
            </div>                
            <div className="row justify-content-end">  
              <span className="btn btn-sm w-25">Room Charges:</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.roomCharges}</strong></span>
            </div>
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25">Discount({this.state.discount}%):</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.discountAmount}</strong></span>
            </div> 
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25">CGST ({this.state.computedData.cgstPercentage}%):</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.cgstAmount}</strong></span>
            </div>
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25">SGST ({this.state.computedData.sgstPercentage}%):</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.sgstAmount}</strong></span>
            </div>
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25" >Total Amount:</span>
              <span className="btn btn-sm w-25" ><strong>{this.state.computedData.totalAmount}</strong></span>
            </div>
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25">Paid Amount:</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.paidAmount}</strong></span>
            </div>
            <div className="row justify-content-end"> 
              <span className="btn btn-sm w-25">Due Amount:</span>
              <span className="btn btn-sm w-25"><strong>{this.state.computedData.dueAmount}</strong></span>
            </div>
            <br/>
            <div className="form-row">  
                <div className="col-md-4 mb-3">            
                  <input className="form-control btn btn-primary" type="button" value="Book" />
                </div> 
                <div className="col-md-4 mb-3">            
                  <input className="form-control btn btn-success" type="button" value="Checkin" />
                </div>
                <div className="col-md-4 mb-3">            
                  <input className="form-control btn btn-warning" type="button" value="Checkout" />
                </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      );
    }
  }

  export default EventModal;