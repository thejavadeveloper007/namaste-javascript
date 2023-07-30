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
        <div className="flex gap-5 border border-purple-800 shadow-md m-5 p-5 rounded-md overflow-hidden">
            <img className="border rounded-md w-50 h-60" src={CDN_URL+resDetails?.cloudinaryImageId} alt="image not found!"/>
          <div className="content">
          <div className="font-serif font-bold text-2xl">
            <span>{resDetails.name}</span>
            </div>
            <div className="flex flex-col">
            <span className="italic">{resDetails?.locality}</span>
            <span>{resDetails?.areaName}</span>
            <span>⭐{resDetails?.avgRating}</span>
            <span>{resDetails?.costForTwo}</span>
            </div>
          </div>
        </div>
        <div>
            <hr></hr>
        </div>
        <div>
            <h4 className="font-serif font-bold text-2xl m-2">Items Available</h4>
            <div className="flex flex-col">
             {
                    itemCards?.map((item) => 
                        <div key={item?._id} className="flex gap-5 border border-orange-500 rounded-md overflow-hidden mx-10 my-2 p-3 shadow-md">
                            <img className="rounded-md w-30 h-40" src={CDN_URL+item?.cloudinaryImageId} />
                            <div className="item-content">
                            <div className="font-serif font-bold">
                            <span>{item?.name}</span>
                            </div>
                           <div className="flex flex-col">
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