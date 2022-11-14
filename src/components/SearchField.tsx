import React from 'react';
import "../styles/searchFieldSheet.css";
// mui icons import
import SearchIcon from "../assets/search 1.svg";

const SearchField:React.FC = () => {
  return (
    <div className="search">
        <input type={"search"} placeholder={"Search for anything"} name={"searches"}/>
        <button><img src={SearchIcon} alt="search icon"/></button>
    </div>
  )
}

export default SearchField;