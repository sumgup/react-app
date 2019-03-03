import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: this.props.value
  };

  render() {
    return (
      <ul>
        {this.state.counters.map(o => (
          <Counter key={o.id} value={o.id} />
        ))}
      </ul>
    );
  }
}

export default Counters;
