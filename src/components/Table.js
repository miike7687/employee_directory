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
            <tr key={i} class="table-row">
              <td>
                <img
                  src={player.image}
                  alt={player.name}
                  class="player-image"
                ></img>
              </td>
              <td>{player.name}</td>
              <td>{player.email}</td>
              <td>{player.position}</td>
              <td>{player.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
