import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // 將在ExpensesFilter.js選擇後的年份資料設定為新的狀態
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={filterYear}
      />
      {/* 在畫面上顯示出我輸入的記帳紀錄,map這個方法會重新做出一個array,
      這邊我們就將自己做的html標籤用array的方式呈現，這樣也會render到畫面上*/}
      {props.expense.map((item) => {
        return <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />;
      })}
    </Card>
  );
}

export default Expenses;
