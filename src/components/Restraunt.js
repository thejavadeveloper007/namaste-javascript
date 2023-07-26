import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestraunt from "../utils/useRestraunt";

const Restraunt = () =>{
    const { id } = useParams();
    console.log('id',id);
    const { allResList, itemCards } = useRestraunt();
    console.log('itemCards',itemCards);
    let resDetails = {};
    allResList.forEach(e =>{
        if(e.id == id){
            resDetails = e;
        }
    })
    console.log('resDetails',resDetails);
    // const itemCards = useRestraunt(id);
    if(resDetails === null || itemCards === null) return <Simmer />

    return (
     <>
        <div className="restraunt">
            <img src={CDN_URL+resDetails?.cloudinaryImageId} alt="image not found!"/>
          <div className="content">
          <div className="res-name">
            <span>{resDetails.name}</span>
            </div>
            <div className="res-details">
            <span>{resDetails?.locality}</span>
            <span>{resDetails?.areaName}</span>
            <span>⭐{resDetails?.avgRating}</span>
            <span>{resDetails?.costForTwo}</span>
            </div>
          </div>
        </div>
        <div>
            <hr></hr>
        </div>
        <div className="items-list">
            <h4>Recommended</h4>
            <div className="list">
             {
                    itemCards?.map((item) => 
                        <div key={item?._id} className="item">
                            <img src={CDN_URL+item?.cloudinaryImageId} />
                            <div className="item-content">
                            <div className="item-name">
                            <span>{item?.name}</span>
                            </div>
                           <div className="item-details">
                           <span>₹{item?.price}</span>
                            <span>⭐{item?.avgRating}</span>
                           </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
     </>
    )
}

export default Restraunt;