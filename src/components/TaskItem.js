/** @format */

import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
    };
  }

  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  buttonMouseOverHandle = (event) => {
    this.setState({ task: event.currentTarget });
  };

  render() {
    return (
      <tr className="d-flex text-center" id="show">
        <th className="task text-2xl" onClick={this.toggleTask}>
          <p
            className={
              this.props.taskItem.isCompleted ? "completed" : "not-completed"
            }
          >
            {this.props.id}. {this.props.taskItem.task}
          </p>
        </th>
        <td>
          <button
            className="delete"
            onMouseOver={this.buttonMouseOverHandle}
            onClick={this.deleteTask}
          >
            <AiFillDelete />
          </button>
        </td>
      </tr>
    );
  }
}
