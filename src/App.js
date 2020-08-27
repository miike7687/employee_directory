import React from "react";
import "./App.css";
import Navbar from "./components//Navbar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <SearchBar />
      <br />
      <Table />
    </div>
  );
}

export default App;
