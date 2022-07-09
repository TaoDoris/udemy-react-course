import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {

  const [filterYear , setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // 將在ExpensesFilter.js選擇後的年份資料設定為新的狀態
    setFilterYear(selectedYear);
  };

  let item = props.expense.map((item) => {
    return (
      <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} defaultYear={filterYear}/>
      {item}
    </Card>
  );
}

export default Expenses;
