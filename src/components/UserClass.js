import React from "react";
import { render } from "react-dom";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Age: 25</h3>
      </div>
    );
  }
}
