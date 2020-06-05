import React, { useState } from "react";
import Team from "./components/Team/Team.js";

import "./App.scss";

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the coresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);

  // const [teams, setTeams] = useState({ teamOne: "", teamTwo: "" });
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const handleClickTeamOne = (index) => {
    setTeamOne([...teamOne, players[index]]);
    setPlayers(players.filter((player, i) => i !== index));
  };

  const handleClickTeamTwo = (index) => {
    setTeamTwo([...teamTwo, players[index]]);
    setPlayers(players.filter((player, i) => i !== index));
  };

  // console.log(teamOne);
  // console.log(teamTwo);

  return (
    <div className="app">
      <ul className="players">
        {players.map((player, index) => (
          <li key={player}>
            <span>{player}</span>
            <div className="buttons">
              <button
                className="teamOne"
                value={index}
                onClick={() => handleClickTeamOne(index)}
              >
                Team 1
              </button>
              <button
                className="teamTwo"
                value={index}
                onClick={() => handleClickTeamTwo(index)}
              >
                Team 2
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Team team={teamOne} class={"ulTeamOne"} />
      <Team team={teamTwo} class={"ulTeamTwo"} />
    </div>
  );
};

export default App;
