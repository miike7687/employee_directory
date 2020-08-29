import React from "react";
import "../styles/Table.css";
import players from "../players.json";
// import SearchBar from "./SearchBar";

// function Table({ results }) {
//   function sortByName() {
//     let sortedNames = players;
//     sortedNames.map((player) => {
//       console.log(player.name);
//       return player.name;
//     });
//     sortedNames.sort((a, b) => {
//       if (a.name < b.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     });
//   }

//   function sortByEmail() {
//     let sortedEmails = this.state.players;
//     sortedEmails.map((player) => {
//       console.log(player.email);
//       return player.email;
//     });
//     sortedEmails.sort((a, b) => {
//       if (a.email < b.email) {
//         return -1;
//       }
//       if (a.email > b.email) {
//         return 1;
//       }
//       return 0;
//     });
//   }
//   function handleClick(event) {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     // setting state to new ordered list
//     this.setState({
//       resultOrdered: sortByName(),
//     });
//   }

//   function handleEmailClick(event) {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     const [order, setOrder] = useState;
//     // setting state to new ordered list
//     setOrder((order = sortByEmail()));
//   }
//   return (
//     <div className="container">
//       {/* <div className="search">
//             <input
//               placeholder="search here"
//               type="text"
//               className="user-type"
//               name="search"
//               style={styleTwo}
//               onChange={this.filterPlayers}
//               // value={this.state.search}
//             ></input>
//           </div> */}
//       <table className="table">
//         <thead>
//           <tr style={style}>
//             <th scope="col">Image</th>
//             <th scope="col">
//               <button type="button" onClick={handleClick}>
//                 Name
//               </button>
//             </th>
//             <th scope="col">
//               <button type="button" onClick={handleEmailClick}>
//                 Email
//               </button>
//             </th>
//             <th scope="col">Position</th>
//             <th scope="col">Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((player, i) => (
//             <tr key={i} className="table-row">
//               <td>
//                 <img
//                   src={player.image}
//                   alt={player.name}
//                   className="player-image"
//                 ></img>
//               </td>
//               <td className="player-info">{player.name}</td>
//               <td className="player-info">{player.email}</td>
//               <td className="player-info">{player.position}</td>
//               <td className="player-info">{player.salary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

class Table extends React.Component {
  state = {
    players: players,
    resultOrdered: [],
    resultFiltered: [],
    search: "",
  };

  sortByName = () => {
    let sortedNames = this.state.players;
    sortedNames.map((player) => {
      console.log(player.name);
      return player.name;
    });
    sortedNames.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  sortByEmail = () => {
    console.log(this.props.results);
    let sortedEmails = this.state.players;
    sortedEmails.map((player) => {
      console.log(player.email);
      return player.email;
    });
    sortedEmails.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
  };
  handleClick = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // setting state to new ordered list
    this.setState({
      resultOrdered: this.sortByName(),
    });
  };

  handleEmailClick = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // setting state to new ordered list
    this.setState({
      resultOrdered: this.sortByEmail(),
    });
  };

  filterPlayers = (e) => {
    const userType = e.target.value;
    // const name = e.target.name;
    let filteredPlayers = this.state.players;
    console.log(userType);
    let newPlayers = filteredPlayers.filter((player) =>
      player.name.toLowerCase().includes(userType.toLowerCase())
    );
    console.log(newPlayers);
    this.setState({
      players: newPlayers,
    });
  };

  //   handleChange = () => {
  //     showUpdatedPage = (e) => {
  //       let filteredPlayers = this.state.players;
  //       const userType = e.target.value;
  //       if (filteredPlayers.toLowerCase().includes(userType.toLowerCase())) {
  //       } else if (this.state.currentPage === "About") {
  //         return <About />;
  //       } else if (this.state.currentPage === "Blog") {
  //         return <Blog />;
  //       } else if (this.state.currentPage === "Contact") {
  //         return <Contact />;
  //       }
  //     };
  //   };
  render() {
    const style = {
      backgroundColor: "blue",
      color: "white",
    };
    const styleTwo = {
      textAlign: "center",
      display: "block",
      margin: "0 auto",
    };
    return (
      <div className="container">
        {/* //{" "} */}
        <div className="search">
          <input
            placeholder="search here"
            type="text"
            className="user-type"
            name="search"
            style={styleTwo}
            onChange={this.filterPlayers}
            // value={this.state.search}
          ></input>
        </div>
        {/* //{" "} */}
        <table className="table">
          {/* //{" "} */}
          <thead>
            {/* //{" "} */}
            <tr style={style}>
              <th scope="col">Image</th>
              {/* //{" "} */}
              <th scope="col">
                {/* //{" "} */}
                <button type="button" onClick={this.handleClick}>
                  Name
                </button>
              </th>

              <th scope="col">
                <button type="button" onClick={this.handleEmailClick}>
                  Email
                </button>
              </th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>

          <tbody>
            {this.state.players.map((player, i) => (
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
}

export default Table;
