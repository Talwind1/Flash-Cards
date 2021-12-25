import React, { Component } from "react";

export default class Manage extends Component {
  state = { data: null };
  componentDidMount() {
    const data = this.props.data;
    this.setState({ data });
  }
  displayQus = () => {
    let data = this.state.data;
    return Object.keys(data).map((obj) => {
      return (
        <div
          key={obj}
          style={{
            height: "100%",
            width: "60%",
            border: ".3em solid black",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h3>Question: {data[obj].qus}</h3>
          <h3>Answer: {data[obj].ans}</h3>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="manage">
        {this.state.data && (
          <div className="container">{this.displayQus()}</div>
        )}
      </div>
    );
  }
}
