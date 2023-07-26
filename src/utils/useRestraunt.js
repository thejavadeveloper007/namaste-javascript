import { useEffect, useState } from "react";
import { MY_RESTRAUNT_DETAILS_URL } from "./constants";
import { MY_RESTRAUNT_LIST_URL } from "../utils/constants";

const useRestraunt = (resId) =>{
    resId = parseInt(resId);
    console.log('id',resId);
  const [allResList, setAllResList] = useState([]);
    // const [restrauntDetails, setRestrauntDetails] = useState(null);
    const [itemCards,setItemCards] = useState(null);
const [filteredResList, setfilteredResList] = useState([]);

    //get restraunt data from API call
    useEffect(() =>{
        getRestrauntList();
        getRestrauntDetailsById();
    },[]);

    async function getRestrauntDetailsById(){
     const res = await fetch(MY_RESTRAUNT_DETAILS_URL);
     const json = await res.json();
       
     console.log('res.json',json);
        // const data = json.data;
        // const restrauntDetail = data?.cards[0]?.card?.card?.info;
        // console.log('res details',restrauntDetail);
        // const itemCardsInfo = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        // console.log('item details',itemCardsInfo);
        // setRestrauntDetails(json);
        setItemCards(json.data);
     
    }
    async function getRestrauntList(){
        console.log('entry------------');
          const data = await fetch(MY_RESTRAUNT_LIST_URL);
          // console.log('data',data);
           let json = await data.json();
           console.log(json);
          //  json = json?.data?.cards;
          //  console.log('json',json);
          //  const cardData = json.map((ele) => ele.data.data);
          //  console.log('cardData',cardData);
      
           setAllResList(json.data);
           setfilteredResList(json.data);
      }
      return { allResList, filteredResList, itemCards};
}

export default useRestraunt;