import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  
  //這邊是取得使用者選擇的年份後，將年份用useState做狀態的存取
  const [filteredYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // 將在ExpensesFilter.js選擇後的年份資料設定為新的狀態
    setFilterYear(selectedYear);
  };

  //這邊是要用年份去區分將我的記賬紀錄
  //filter這個方法會回傳符合條件的值再放回一個新的陣列中,而目前這個陣列中的值為物件
  const filteredExpenses = props.expense.filter(function (item) {
    return item.date.getFullYear().toString() === filteredYear
  });

  


  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
