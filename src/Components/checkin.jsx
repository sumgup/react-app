import React, { Component } from "react";

class Checkin extends Component {
  state = {
  };

  render() {
    return (
      <div className="col-sm border bg-light">
          <p>{this.props.data.text}</p>
      </div>
    );
  }
}

export default Checkin;