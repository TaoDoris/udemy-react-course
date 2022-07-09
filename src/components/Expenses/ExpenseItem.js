import React , {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title , setTitle] = useState(props.title);

  function changeTtitleHandler(e){
    setTitle("Updated!!!!!");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeTtitleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;