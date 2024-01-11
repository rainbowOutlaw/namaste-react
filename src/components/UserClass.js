import React from "react";
import { render } from "react-dom";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { count } = this.state;

    console.log("Child Component did render");
    return (
      <div className="user">
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Age: 25</h3>
      </div>
    );
  }
}
