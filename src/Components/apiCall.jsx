import React, { Component } from "react";

class ApiCall extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        posts: []
      };
    }
  
    componentDidMount() {
      fetch("https://my-json-server.typicode.com/typicode/demo/posts")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              posts: result
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
            <div class="col-sm border bg-light">
            <div>post :</div>
            <div>Error: {error.message}</div>
          </div>
          );
        } else if (!isLoaded) {
          return <div class="col-sm border bg-light">Loading...</div>;
        } else {
          return (
            <div class="col-sm border bg-light">
            <div>post :</div>
            <div><h1>{posts[0].title}</h1></div>
            </div>
          );
        }
      }
}

export default ApiCall;  