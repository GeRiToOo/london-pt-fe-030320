import React, { useState } from "react";

import Player from "./Player/Player.js";

const Team = (props) => {
  return (
    <div className="team">
      <ul className={`ulTeam ${props.class}`}>
        {props.team.map((player) => (
          <Player key={player} player={player} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
