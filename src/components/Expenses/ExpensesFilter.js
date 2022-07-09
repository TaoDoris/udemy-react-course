// Presentational Component (注重UI畫面呈現，而不是資料的儲存)
import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (e)=>{
    // console.log(e.target.value);
    // 下面的程式碼是要將我選擇到的年份data以參數的方式傳到Expenses.js裡面
    props.onFilterChange(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.defaultYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
