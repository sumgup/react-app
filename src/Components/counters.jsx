import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  render() {
    return (
      <div class="col-sm border bg-light">
      <ul>
        {this.state.counters.map(o => (
          <Counter key={o.id} value={o.id} />
        ))}
      </ul>
      </div>
    );
  }
}

export default Counters;
