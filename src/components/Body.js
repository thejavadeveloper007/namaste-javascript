import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import { searchRestraunt } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestraunt from "../utils/useRestraunt";

const Body = () => {
const [searchRes, setSearchRes] = useState("");
const { allResList, filteredResList } = useRestraunt();
// useEffect(() => {
//   console.log('useeffect')
//   console.log('allResList',allResList)
//         getRestrauntList();
//         console.log('allResList2',allResList)

// },[]);

// async function getRestrauntList(){
//   console.log('entry------------');
//     const data = await fetch(MY_RESTRAUNT_LIST_URL);
//     // console.log('data',data);
//      let json = await data.json();
//      console.log(json);
//     //  json = json?.data?.cards;
//     //  console.log('json',json);
//     //  const cardData = json.map((ele) => ele.data.data);
//     //  console.log('cardData',cardData);

//      setAllResList(json.data);
//      setfilteredResList(json.data);
// }

const isOnline = useOnline();
if(!isOnline){
  return <h1>Oops! network gone.</h1>
}
    return filteredResList?.length === 0 ? <Simmer /> : (
    <>
      <div className="body">
        <div className="search">
            <input className="search-input"
                type="text"
                placeholder="type restraunt name here..."
                value={searchRes}
                onChange={(e) =>
                setSearchRes(e.target.value)
                }
            ></input>
            <button className="search-btn" onClick={() =>{
                if(searchRes){
                filteredResList = searchRestraunt(searchRes, allResList)
                }else{
                   filteredResList = resList;
                }
                }}>Search</button>
        </div><br></br>
        <div className="filter">
            <button className="filter-btn" onClick={() =>{
                console.log('-------------');
              filteredResList = allResList.filter((ele) => ele.avgRating == 4)
              console.log('filteredResList',filteredResList);
            }}>Top Rated Restaurant</button>
        </div><br></br>
        <div className="res-container">
          {
              filteredResList.map(restaurant =>
                <Link to={"/restraunt/"+restaurant.id} key={restaurant.id}>  <RestrauntCard resData={restaurant} /></Link>
              )
          }
        </div>
      </div>
    </>
    );
  };

export default Body;