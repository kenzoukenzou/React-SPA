import React, { Component } from "react";

// Test lifecycle method
class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  //ライフサイクルメソッドなので,thisを使える
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
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
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
