import { useState } from 'react';

export const searchRestraunt = (searchRes, listOfRes) =>{
const [searchedRes, setSearchedRes] = useState(null);

    console.log('searchres',searchRes);
    console.log('list',listOfRes[0].name.toLowerCase());
  
     listOfRes.filter((ele) => ele.name.toLowerCase().includes(searchRes.toLowerCase()));
     setSearchedRes(listOfRes);
     return searchedRes;
  }