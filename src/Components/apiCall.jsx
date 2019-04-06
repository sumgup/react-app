import React, { Component } from "react";

class ApiCall extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        hotels: []
      };
    }
  
    componentDidMount() {
      fetch("https://dh-hotel-devops-api.azurewebsites.net/api/hotels")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              hotels: result
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
        const { error, isLoaded, posts } = this.state;
        if (error) {
          return (
            <div className="col-sm border bg-light">
            <div>hotels :</div>
            <div>Error: {error.message}</div>
          </div>
          );
        } else if (!isLoaded) {
          return <div className="col-sm border bg-light">Loading...</div>;
        } else {
          return (
            <div className="col-sm border bg-light">
              <div>hotels :</div>
              <ul>
              {this.state.hotels.map(o => (
                <li key={o.hotelId}>{o.name} | {o.address}</li>
              ))}
            </ul>
            </div>
          );
        }
      }
}

export default ApiCall;  