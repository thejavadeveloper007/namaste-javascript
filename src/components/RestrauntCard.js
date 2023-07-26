import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const {resData} = props;
  const { name, cuisines, avgRating, price, deliveryTime, cloudinaryImageId } = resData;
  return (
    <div className="res-card">
      <img
        alt="res-image"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating} stars</h4>
      <h4>₹{price}</h4>
      <h4>⏳{deliveryTime} min</h4>
    </div>
  );
};

export default RestrauntCard;