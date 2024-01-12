import RestaurantCard from "./RestaurantCard";
import React from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = React.useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);

  const [searchText, setSearchText] = React.useState("");

  const isOnline = useIsOnline();

  React.useEffect(() => {
    async function getResData() {
      const data = await fetch(RESTAURANT_LIST_API);

      const response = await data.json();
      setListOfRestaurants(
        response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    getResData();
  }, []);

  function clickHandler() {
    let currList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setListOfRestaurants(currList);
  }

  if (!isOnline) {
    return (
      <h1>You are currently offline! Please check your internet connection.</h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-res">
        <div className="search-input">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            onClick={() => {
              const currList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(currList);
            }}
          >
            Search
          </button>
        </div>
        <button onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
