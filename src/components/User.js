import React from "react";

export default function User({ name }) {
  return (
    <div className="user">
      <h1>Name: {name}</h1>
      <h2>Location: Bhubaneswar</h2>
      <h3>Age: 25</h3>
    </div>
  );
}
