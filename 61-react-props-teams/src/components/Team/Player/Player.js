import React, { useState } from "react";

const Player = (props) => {
  return (
    <div className="player">
      <li key={props.player}>{props.player}</li>
    </div>
  );
};

export default Player;
