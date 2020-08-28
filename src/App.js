import React from "react";
import "./App.css";
import Navbar from "./components//Navbar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import players from "./players.json";

class App extends React.Component {
  state = {
    players: players,
  };

  handleChange = (e) => {
    console.log(this.state.players);
    const userType = e.target.value;
    console.log(userType);
    const newPlayers = this.state.players.filter((player) =>
      player.name.includes(userType)
    );

    this.setState({
      players: newPlayers,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <SearchBar onChange={this.handleChange} />
        <br />
        <Table players={this.state.players} />
      </div>
    );
  }
}

export default App;
