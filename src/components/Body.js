import RestaurantCard from "./RestaurantCard";
import React from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = React.useState([]);

  React.useEffect(() => {
    // const json = fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2891084&lng=85.8083003&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    // json
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setListOfRestaurants(
    //       data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );
    //   });

    async function getResData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2891084&lng=85.8083003&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const response = await data.json();
      setListOfRestaurants(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-res">
        <button onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
