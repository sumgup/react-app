import React, { Component } from 'react';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap'
import './App.css';
import ApiCall from "./Components/apiCall";
import Clock from "./Components/clock";
import Counters from "./Components/counters";
import ModalEx from "./Components/modalEx";

class App extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }],
    modalShow: false
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className = "container-fluid">
        <div className = "row">
          <div class="col-sm border bg-light">
              <ApiCall/>
          </div>
          <div class="col-sm border bg-light">
            <Clock />
          </div>
          <div className="col-sm border bg-light">
            <Counters value = {this.state.counters}></Counters>
          </div>          
        </div>
        <div className = "row">
          <div class="col-sm border bg-light">
          <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <ModalEx
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
          </div>
          <div class="col-sm border bg-light">
            <Clock />
          </div>
          <div className="col-sm border bg-light">
            <Counters value = {this.state.counters}></Counters>
          </div>          
        </div>
      </div>    
    );
  }
}

export default App;
