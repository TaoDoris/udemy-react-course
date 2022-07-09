import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css' ;

const NewExpense = (props) => {

  const getExpenseDataHandler = (userInputExpenseData) => {
    //將從ExpenseForm得到的使用者資料以參數傳進這裡，並再將他做成一個新的物件，且加上id
    const expenseData = {
      ...userInputExpenseData,
      id: Math.random(),
    };

    //執行從App.js中用props傳入的函式,並將上面拿到的使用者輸入資料object當作參數傳到App.js裡的function
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      {/* 這邊的onGetExpenseData事件是用來取得子組件的資料，子組件的資料會以參數的方式傳到getExpenseDataHandler這個函式裡 */}
      <ExpenseForm onGetExpenseData={getExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;