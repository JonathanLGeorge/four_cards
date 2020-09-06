import React from "react";
import "../App.css";
function Cards(props) {
  return (
    <div className={props.info.box}>
      <h2>{props.info.title}</h2>
      <p>{props.info.text}</p>
      <img src={props.info.image} alt="icon" />
    </div>
  );
}

export default Cards;
