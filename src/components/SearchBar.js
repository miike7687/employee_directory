import React from "react";
import "../styles/SearchBar.css";

const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};

function SearchBar() {
  return (
    <div className="search">
      <input
        placeholder="search here"
        type="text"
        className="user-type"
        style={style}
      ></input>
    </div>
  );
}

export default SearchBar;
