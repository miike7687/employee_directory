import React from "react";
import "../styles/Table.css";
import players from "../players.json";

const style = {
  backgroundColor: "blue",
  color: "white",
};

function Table() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr style={style}>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => (
            <tr key={i} className="table-row">
              <td>
                <img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                ></img>
              </td>
              <td className="player-info">{player.name}</td>
              <td className="player-info">{player.email}</td>
              <td className="player-info">{player.position}</td>
              <td className="player-info">{player.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
