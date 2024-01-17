import { RES_IMG } from "../utils/constants";

export default function ItemsList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="py-2 my-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <span className="text-xs">{item.card.info.description}</span>
            </div>
            <div className="w-3/12">
              <div className="absolute p-2 bg-green-200 rounded-md mx-16">
                <button>Add +</button>
              </div>
              {item.card.info.imageId ? (
                <img src={RES_IMG + item.card.info.imageId} />
              ) : (
                <p>No Image</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
