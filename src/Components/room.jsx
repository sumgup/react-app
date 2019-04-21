import React, { Component, Fragment } from "react";

class Room extends Component {
  state = {
    room: this.props    
  };

  handleDelete = () => {
    this.props.onRemoveItem(this.state.room);
  };

  render() {
    return (
      <div>
        <div style={{background:"lightgrey", margin:'2px'}}>
          <span className="badge badge-primary m-2">{this.state.room.name}</span>
          {this.state.room.specs.map(s => (
            <Fragment key={s.id}>
              <label className="badge badge-warning m-2" >  {s.name} <input type="checkbox" checked={s.value} readOnly/></label>
            </Fragment>
          ))}
          <button className="btn-sm btn-danger m-2" onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Room;