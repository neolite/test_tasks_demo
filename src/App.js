import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Task from "./components/Task";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentDidMount() {
    fetch("/tasks.json")
      .then(r => r.json())
      .then(({ tasks }) => this.setState({ tasks }));
  }
  finishTask = id => {
    return () => {
      fetch("/tasks", {
        method: "POST",
        body: JSON.stringify({ id })
      })
        .then(() =>
          this.setState({ tasks: this.state.tasks.filter(t => t.id !== id) })
        )
        .catch(console.error);
    };
  };
  render() {
    return (
      <div className="container">
        <div className="row" id="header">
          <div className="col text-center">
            <h3>Welcome to simple task manager</h3>
          </div>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <ListGroup>
              {this.state.tasks.map(t => (
                <ListGroupItem key={t.id}>
                  <Task
                    id={t.id}
                    title={t.title}
                    text={t.text}
                    finishHandler={this.finishTask(t.id)}
                  />
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default App;
