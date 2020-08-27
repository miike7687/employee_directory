import React from "react";
import "../styles/Table.css";

const style = {
  backgroundColor: "blue",
  color: "white",
};

const image = {
  width: "55px",
  height: "65px",
};

function Table() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr style={style}>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr className="input-row">
            <td>
              <img
                src="https://d1si3tbndbzwz9.cloudfront.net/baseball/player/4773/w192xh192_headshot.png"
                alt="Aaron Judge Headshot"
                style={image}
              />
            </td>
            <td>Aaron Judge</td>
            <td>Right Field</td>
            <td>$622,300</td>
          </tr>
          <tr className="input-row">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr className="input-row">
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
