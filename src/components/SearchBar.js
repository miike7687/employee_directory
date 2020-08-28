import React from "react";
import "../styles/SearchBar.css";

const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};
function handleChange(e) {
  const userType = e.target.value;
  console.log(userType);
}
function SearchBar() {
  return (
    <div className="search">
      <input
        placeholder="search here"
        type="text"
        className="user-type"
        style={style}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
