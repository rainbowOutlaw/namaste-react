import User from "./User";
import UserClass from "./UserClass";

export default function About() {
  return (
    <div>
      <h1>Namaste React</h1>
      <h4>About Us Page</h4>
      <UserClass name={"Anshuman"} location={"California"} />
    </div>
  );
}
