import React, { Component } from "react";
import {Form, Button, Col, Modal} from 'react-bootstrap';
import {GetEventData} from "../Services/eventService.js";

class EventModal extends Component {
  constructor(props) {
    super(props);
    let data = GetEventData();
    this.state = {      
      selectedEvent: this.props.selectedEvent,
      guestName : data.guestName,
      guestEmail : data.guestEmail,
      guestPhone : data.guestPhone,
      guestAddress : data.guestAddress,
      checkinDate : data.checkinDate,
      checkoutDate : data.checkoutDate,
      roomNumber : data.roomNumber,
      guestCounts : data.guestCounts,
      extraBed : data.extraBed,
      roomRate : data.roomRate,
      roomCharges: 0, 
      taxAmount: 0,
      totalAmount : 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name === 'roomRate')
    {
      const roomCharges = value*5;
      const taxAmount = roomCharges*8/100;
      const totalAmount = roomCharges + taxAmount;
        this.setState({ 
          roomCharges: roomCharges, 
          taxAmount: taxAmount,
          totalAmount : totalAmount
        });
    }
    
    console.log(value + name);
    this.setState({ [name]: value });
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
                  <label>Guest Name:</label>
                  <input className="form-control" name="guestName" type="text" value={this.state.guestName} onChange={this.handleInputChange} />                 
                </div>
                <div className="col-md-4 mb-3">
                  <label>Guest Email:</label>
                  <input className="form-control" name="guestEmail" type="email" value={this.state.guestEmail} onChange={this.handleInputChange} />                
                </div>
                <div className="col-md-4 mb-3">                  
                  <label>Guest Phone:</label>
                  <input className="form-control" name="guestPhone" type="text" value={this.state.guestPhone} onChange={this.handleInputChange} />               
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-12 mb-3">
                  <label>Guest Address:</label>
                  <input className="form-control" name="guestAddress" type="text" value={this.state.guestAddress} onChange={this.handleInputChange} />                  
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label>Checkin Date:</label>
                  <input className="form-control" name="checkinDate" type="date" value={this.state.checkinDate} onChange={this.handleInputChange} />             
                </div>
                <div className="col-md-6 mb-3">
                  <label>Checkout Date:</label>
                  <input className="form-control" name="checkoutDate" type="date" value={this.state.checkoutDate} onChange={this.handleInputChange} />                
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label>Room Number:</label>
                  <input className="form-control" name="roomNumber" type="text" value={this.state.roomNumber} onChange={this.handleInputChange} />                  
                </div>
                <div className="col-md-3 mb-3">
                  <label>Guest Counts:</label>
                  <input className="form-control" name="guestCounts" type="number" value={this.state.guestCounts} onChange={this.handleInputChange} />                  
                </div>
                <div className="col-md-3 mb-3">
                  <label>Extra Bed:</label>
                  <input className="form-control" name="extraBed" type="checkbox" checked={this.state.extraBed} onChange={this.handleInputChange} />                 
                </div>   
                <div className="col-md-3 mb-3">
                  <label>Room Rate:</label>
                  <input className="form-control" name="roomRate" type="number" value={this.state.roomRate} onChange={this.handleInputChange} />                  
                </div>             
            </div>
            <br/>
            <div className="form-row">  
                <div className="col-md-3 ml-auto">
                  <label>Room Charges:</label>                 
                </div> 
                <div className="col-md-3">
                  <label>{this.state.roomCharges}</label>                 
                </div> 
            </div>
            <div className="form-row">  
                <div className="col-md-3 ml-auto">
                  <label>GST (8%):</label>                 
                </div> 
                <div className="col-md-3">
                  <label>{this.state.taxAmount}</label>                 
                </div> 
            </div>
            <div className="form-row">  
                <div className="col-md-3 ml-auto">
                  <label>Total Amount:</label>                 
                </div> 
                <div className="col-md-3">
                  <label>{this.state.totalAmount}</label>                 
                </div> 
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