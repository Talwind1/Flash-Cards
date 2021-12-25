import React, { Component } from "react";

export default class Reveal extends Component {
  state = { total: 5, know: 0 };
  componentDidMount() {
    this.setState({ total: this.props.total });
  }
  increase = () => {
    this.setState({ know: this.state.know + 1 });
    this.props.nextFunc();
  };

  next = () => {
    this.props.nextFunc();
  };

  render() {
    return (
      <div>
        <h2>Did you get it right?</h2>
        <button onClick={this.increase}>Yes</button>
        <button onClick={this.next}>No</button>
        <h2>Completed</h2>
        <h2>{this.state.know} / 5</h2>
      </div>
    );
  }
}
