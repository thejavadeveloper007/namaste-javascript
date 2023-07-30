import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
  const { name, cuisines, avgRating, price, deliveryTime, cloudinaryImageId } = resData;
  return (
    <div className="bg-white border border-gray-400 rounded-lg overflow-hidden pb-2 shadow-md h-full">
      <img
        alt="res-image"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3 className="px-2 font-bold">{name}</h3>
      <h4 className="px-2 italic">{cuisines.join(", ")}</h4>
      <h4 className="px-2">⭐{avgRating} stars</h4>
      <h4 className="px-2">₹{price}</h4>
      <h4 className="px-2">⏳{deliveryTime} min</h4>
    </div>
  );
};

export default RestrauntCard;