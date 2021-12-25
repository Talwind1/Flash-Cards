import React, { Component } from "react";
import Reveal from "./Reveal";

export default class Play extends Component {
  state = { data: null, index: 0, showQus: true, revealing: false };
  componentDidMount() {
    const data = this.props.data;
    this.setState({ data });
  }

  reveal = () => {
    this.setState({ showQus: false, revealing: true });
  };

  next = () => {
    this.setState({ index: (this.state.index + 1) % 5, showQus: true });
  };

  render() {
    return (
      <div className="play">
        {this.state.data && (
          <div
            style={{
              height: "40%",
              width: "40%",
              border: ".3em solid black",
              margin: "auto",
              textAlign: "center",
            }}
          >
            {this.state.showQus && (
              <h2> {this.state.data[this.state.index].qus}</h2>
            )}

            {!this.state.showQus && (
              <h2> {this.state.data[this.state.index].ans}</h2>
            )}
          </div>
        )}
        <button onClick={this.next}>New Card</button>
        <button onClick={this.reveal}>Revael Answer</button>
        {this.state.revealing && <Reveal nextFunc={this.next}></Reveal>}
      </div>
    );
  }
}
