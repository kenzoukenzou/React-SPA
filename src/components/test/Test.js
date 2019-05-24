import React, { Component } from "react";

// Test lifecycle method
class Test extends Component {
  componentDidMount() {
    console.log("ComponentDidMount...");
  }

  // componentWillMount() {
  //   console.log("CompontnWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate");
  // }

  // componentWillReceiveProps(nextprops, nextstate) {
  //   console.log("ComponentWill");
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
