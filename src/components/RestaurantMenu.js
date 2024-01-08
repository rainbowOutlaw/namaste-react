import React from "react";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D20.2960587%26lng%3D85.8245398%26restaurantId%3D85777%26catalog_qa%3Dundefined%26submitAction%3DENTER"
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info);
    setResInfo(json);
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name } = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>Menu</h3>
      <ul>
        <li>Biriyani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
}
