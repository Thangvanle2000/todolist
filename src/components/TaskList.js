/** @format */

import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    return (
      <table className="table bg-pink w-50">
        <thead>
          <tr className="w-100 d-flex justify-content-between mr-auto">
            <th scope="col">
              <h3 className="font-semibold text-warning">List:</h3>
            </th>
            <th scope="col">
              <select
                name="mode"
                className="text-md border-2 border-warning p-1 rounded-lg"
              >
                <option value="all">All</option>
                <option value="todo">To do</option>
                <option value="done">Done</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
