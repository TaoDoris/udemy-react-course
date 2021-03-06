import React from "react";
import "./Card.css";

function Card(props) {
  //Card外框架的樣式card(後面記得要加空格) + 原本ExpenseItem外框的樣式(透過props傳進來)
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
