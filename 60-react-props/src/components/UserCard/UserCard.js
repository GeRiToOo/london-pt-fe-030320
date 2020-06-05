import React from "react";

const UserCard = (props) => {
  return (
    <div className="card">
      <h2>{props.user.name}</h2>
      <p>
        <span>{props.user.company.toUpperCase()}</span>
      </p>
      <p>{props.user.email}</p>
    </div>
  );
};

export default UserCard;
