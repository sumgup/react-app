import React, { Component } from "react";
import {ButtonToolbar, Button} from 'react-bootstrap';
import ModalEx from "./modalEx";

class ModalDemo extends Component {
    state = {
        modalShow: false
      };

    render() {
        let modalClose = () => this.setState({ modalShow: false });
      return (
        <div class="col-sm border bg-light">
            < ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}>
                  Launch vertically centered modal
                </Button>
                <ModalEx
                  show={this.state.modalShow}
                  onHide={modalClose}/>
              </ButtonToolbar>
          </div>     
      );
    }
  }

  export default ModalDemo;