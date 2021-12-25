import React, { Component } from "react";

export default class Manage extends Component {
  state = {
    qus: "",
    ans: "",
    editing: false,
    editId: null,
  };

  edit = (id) => {
    this.setState({ editing: !this.state.editing, editId: id });
  };
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

          <button onClick={() => this.edit(obj.id)}>Edit</button>
        </div>
      );
    });
  };
  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="manage">
        {this.props.data && (
          <div className="container">{this.displayQus()}</div>
        )}

        {this.state.editing && (
          <div>
            <input
              type="text"
              onChange={this.onInputChange}
              name="qus"
              placeholder="edit question"
              value={this.state.qus}
            />
            <input
              type="text"
              onChange={this.onInputChange}
              name="ans"
              placeholder="edit answer"
              value={this.state.ans}
            />
            <button
              onClick={() => {
                this.props.submitItem(
                  this.state.qus,
                  this.state.ans,
                  this.state.editId
                );
              }}
            >
              Submit
            </button>
          </div>
        )}
        <textarea
          placeholder="question"
          name="qus"
          onChange={this.onInputChange}
        />
        <textarea
          placeholder="answer"
          name="ans"
          onChange={this.onInputChange}
        />
        <button
          onClick={() => {
            this.props.add(this.state.qus, this.state.ans);
          }}
        >
          add
        </button>
      </div>
    );
  }
}
