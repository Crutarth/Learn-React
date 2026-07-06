import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.img}
          alt=""
        />
        <h2>{props.user}</h2>
        <p>{props.bio}</p>
        <button>View Profile</button>
      </div>
    </>
  );
};

export default Card;
