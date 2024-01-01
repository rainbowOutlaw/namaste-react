import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RES_IMG + cloudinaryImageId}
        alt="pizza image"
      />
      <h3>{name}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;
