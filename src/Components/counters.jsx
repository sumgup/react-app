import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  
  removeItem = (i) => {
    console.log('remove item' + i);
    this.setState({ counters: this.state.counters.filter(o=> o.id != i)});
  }
  render() {
    return (
      <div>
      <ul>
        {this.state.counters.map(o => (
          <Counter key={o.id} value={o.id} onRemoveItem={this.removeItem}/>
        ))}
      </ul>
      </div>
    );
  }
}

export default Counters;
