const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.gridElements.infoWithStyle.restaurants.map((restaurant) => {
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
