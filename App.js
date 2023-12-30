import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1198248899/photo/stuffed-tomatoes-and-rice-with-tomato.jpg?s=1024x1024&w=is&k=20&c=RpwY_eAdY7ctEn1RJ3COZqoS4NkUo3HwPFS0Gb6rgyA="
          alt="delivery app logo"
        />
      </div>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  );
};

// const Body = () => {
//   return(

//   )
// }

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
