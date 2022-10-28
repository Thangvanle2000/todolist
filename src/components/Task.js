/** @format */

import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="row d-flex justify-content-center align-item-center form-inline"
      >
        <div className="col-5">
          <input
            type="text"
            className="form-control-lg rounded-lg bg-input w-100"
            value={this.state.task}
            onChange={this.handleChange}
            autoFocus
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="rounded-lg btn-lg btn-color text-center"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </form>
    );
  }
}
