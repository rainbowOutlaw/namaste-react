import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.resData;

  return (
    <div className="w-[200px] border-2 border-black p-2 rounded-md bg-slate-100 hover:bg-slate-200">
      <img
        className="w-[180px] h-[180px] mx-auto"
        src={RES_IMG + cloudinaryImageId}
        alt="pizza image"
      />
      <h3 className="font-bold">{name}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;
