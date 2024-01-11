import User from "./User";
import UserClass from "./UserClass";
import { render } from "react-dom";

export default class About {
  constructor() {
    console.log("Parent Constructor Render");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div>
        <h1>Namaste React</h1>
        <h4>About Us Page</h4>
        <UserClass name={"Anshuman"} location={"California"} />
      </div>
    );
  }
}
