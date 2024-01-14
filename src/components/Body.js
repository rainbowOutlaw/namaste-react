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
    <div className="">
      <div className="flex justify-center gap-5 my-4">
        <div className="">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="border-2 border-black mr-10 p-1 rounded-md"
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
            className="rounded-md bg-pink-100 p-2 hover:bg-pink-200"
          >
            Search
          </button>
        </div>
        <button
          onClick={clickHandler}
          className="rounded-md bg-pink-100 p-2 hover:bg-pink-200"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-8 pl-8">
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
