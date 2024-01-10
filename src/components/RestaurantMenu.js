import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = React.useState(null);

  const { resId } = useParams();

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((dish) => (
          <li key={dish.card.info.id}>
            {dish.card.info.name} - Rs. {dish.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}
