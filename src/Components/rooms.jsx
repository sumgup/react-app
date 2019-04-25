import React, { Component } from "react";
import Room from "./room";
import {GetRooms} from "../Services/roomService.js";

class Rooms extends Component {
  state = {
    roomslist: GetRooms()
  };
  
  removeItem = (room) => {
    console.log('remove item' + room.id);
    this.setState({ roomslist: this.state.roomslist.filter(r=> r.id !== room.id)});
  }
  render() {
    return (
      <div>
        <h5>Rooms Listing -</h5>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {this.state.roomslist.map(r => (
            <Room key={r.id} {...r} onRemoveItem={this.removeItem}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default Rooms;