import ItemsList from "./ItemsList";
import { useState } from "react";

export default function RestaurantCategory({
  data,
  showItems,
  onClick,
  setIndexNull,
}) {
  function handleClick() {
    if (showItems) {
      setIndexNull();
      return;
    }
    onClick();
  }

  return (
    <div className="w-6/12 mx-auto cursor-pointer">
      <div
        className="flex justify-between bg-slate-50 py-1 mt-2"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemsList items={data?.itemCards} />}
    </div>
  );
}
