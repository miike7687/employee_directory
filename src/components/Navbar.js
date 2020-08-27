import React from "react";

const style = {
  color: "white",
  fontSize: "32px",
  justifyContent: "center",
  backgroundColor: "blue",
};

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark" style={style}>
      New York Yankees Employee Tracker
    </nav>
  );
}

export default Navbar;
