import React, { Component } from "react";

class ApiCall extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        people: []
      };
    }
  
    componentDidMount() {
      fetch("https://my-json-server.typicode.com/kumardh/react-app")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              name: result[0].name
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        const { error, isLoaded, ip } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <h1>{ip}</h1>
          );
        }
      }
}

export default ApiCall;  