import React, { Component } from "react";

export default class Manage extends Component {
  displayQus = () => {
    return this.props.data.map((obj) => {
      return (
        <div
          key={obj.id}
          style={{
            height: "100%",
            width: "60%",
            border: ".3em solid black",
            margin: "auto",
            textAlign: "center",
          }}
          id={obj.id}
        >
          <h3>Question: {obj.qus}</h3>
          <h3>Answer: {obj.ans}</h3>
          <button
            onClick={() => {
              this.props.deleteFunc(obj.id);
            }}
          >
            Delete
          </button>
          <button>Edit</button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="manage">
        {this.props.data && (
          <div className="container">{this.displayQus()}</div>
        )}
      </div>
    );
  }
}
