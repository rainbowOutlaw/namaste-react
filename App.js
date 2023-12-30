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
        <li className="nav-item">About Us</li>
        <li>Contact Us</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media.istockphoto.com/id/1170813886/photo/popular-colorful-ingredients-as-like-tomatoes-cheese-mushroom-capsicum-olives-and-other.webp?b=1&s=170667a&w=0&k=20&c=vrPmEbMnCBCiKihzDDBQPLLopogI8xG7NlT5GOtoGr0="
        alt="pizza image"
      />
      <h3>Delicious Pizza</h3>
      <h4>Pizza</h4>
      <h4>Italian</h4>
      <h3>20 mins</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
