import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenseData , setExpenseData] = useState({});

  const addExpenseDataHandler = (userInputExpenseData) => {
    console.log(userInputExpenseData);
    setExpenseData(userInputExpenseData);
  };

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* 這邊的onAddExpenseData事件是用來取得子組件的資料，子組件的資料會以參數的方式傳到addExpenseDataHandler這個函式裡 */}
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
