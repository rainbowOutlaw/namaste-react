import React from "react";

import { RESTAURANT_MENU_API } from "./constants";

export default function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = React.useState(null);
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  }

  return resInfo;
}
