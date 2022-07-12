import React , { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredAmount , setEnteredAmount] = useState(''); //這邊預設狀態為string是因為，用onChange事件得到的值不管怎樣都會是字串，即便我們輸入的是數字
  const [enteredDate, setEnteredDate] = useState('');

  // 用事件物件取得使用者輸入的資訊，並更新到state裡
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  //當按下送出鈕後執行的function(onSubmit)
  const formSubmitHandler = (e) => {
    e.preventDefault(); //點擊Add Expense按鈕時，不要送出表單

    //將使用者輸入的資料做成一個object
    let userInputExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(userInputExpenseData); //確認剛剛做的物件有沒有正確

    //執行從NewExpense.js中用props傳入的函式,並將上面做好的使用者輸入資料object當作參數往上傳到父組件NewExpense.js裡的function
    props.onGetExpenseData(userInputExpenseData);

    //資料拿到後清空輸入框裡面的東西
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    //表單送出後，表單畫面消失，變成按鈕
    props.onHideExpenseForm();
  };

  //點擊cancel按鈕後，表單畫面消失，變成Add New Expense按鈕
  const cancelHandler = ( )=> {
    props.onHideExpenseForm();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* 這邊會再用DIV把input鈕包起來是為了樣式設定 */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value = {enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* 把第一個button的type設成button後，點擊時才不會將表單送出 */}
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm ;