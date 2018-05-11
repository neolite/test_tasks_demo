import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <div>
        <Button color="link" onClick={this.toggle}>
          {this.props.title}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <div className="col"> {this.props.text}</div>
              <div className="col">
                <Button color="secondary" onClick={this.props.finishHandler}>
                  Завершить
                </Button>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Task;
