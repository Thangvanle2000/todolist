/** @format */

import React from "react";
import Task from "./Task";
import TaskList from "./TaskList";

const tasks = [];
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }
  createTask = (task) => {
    if (task.trim() === "") {
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
  };
  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div className="container mx-auto mt-4 text-center">
        <div className="row d-flex justify-content-center fs-4">
          <div className="col-lg-12">
            <p>Let's add what you have to do!</p>
          </div>
          <div className="col-lg-6">
            <p>
              Fill the input and click button or "Enter" to add a new task into
              the list.
              <br />
              To mark as completed, just click directly to the task
            </p>
          </div>
        </div>
        <div className="content d-flex flex-column text-center justify-content-center mb-5">
          <div className="row">
            <div className="col-12 mb-3">
              <Task createTask={this.createTask} />
              <br />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <TaskList
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                toggleTask={this.toggleTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
