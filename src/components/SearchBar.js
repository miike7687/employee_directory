import React, { useState } from "react";
import "../styles/SearchBar.css";
import players from "../players.json";

const style = {
  textAlign: "center",
  display: "block",
  margin: "0 auto",
};
// function handleChange(e) {
//   const userType = e.target.value;
//   console.log(userType);
//   const newPlayers = players.filter((player) => player.name.includes(userType));
//   console.log(newPlayers);
// }

function SearchBar({ setResults }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setResults(players);
    } else {
      var filteredPlayers = players.filter((player) => {
        return player.name.toLowerCase().includes(search);
      });
      console.log(filteredPlayers);
      setResults(filteredPlayers);
    }
  };

  return (
    <div className="search">
      <h3>Search for your favorite Yankee here!</h3>
      <input
        placeholder="search here"
        type="text"
        className="user-type"
        style={style}
        value={search}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default SearchBar;
