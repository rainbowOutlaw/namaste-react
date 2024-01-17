import ItemsList from "./ItemsList";
import { useState } from "react";

export default function RestaurantCategory({ data }) {
  const [showItems, setShowItems] = useState(false);

  function handleClick() {
    setShowItems(!showItems);
  }

  return (
    <div className="w-6/12 mx-auto cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between bg-slate-50 py-1 mt-2">
        <span className="text-lg font-medium">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemsList items={data?.itemCards} />}
    </div>
  );
}
