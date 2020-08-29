import React from "react";
import "./App.css";
import Navbar from "./components//Navbar";
// import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
// import players from "./players.json";

// class App extends React.Component
function App() {
  // const [results, setResults] = useState(players);
  // state = {
  //   players: players,
  // };

  // handleChange = (e) => {
  //   console.log(this.state.players);
  //   const userType = e.target.value;
  //   console.log(userType);

  //   this.setState({
  //     players: newPlayers,
  //   });
  // };
  // render() {
  return (
    <div>
      <Navbar />
      <br />
      {/* <SearchBar setResults={setResults} /> */}
      {/* onChange={this.handleChange}  */}
      <br />
      <Table />
      {/* players={this.state.players} */}
      {/* results={results} */}
    </div>
  );
}

export default App;
