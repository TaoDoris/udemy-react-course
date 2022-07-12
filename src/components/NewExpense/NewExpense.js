import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  // 設定當我的isEditing狀態為false時，下面不會顯示<ExpenseForm />
  const [isEditing, setIsEditing] = useState(false);
  // 點擊Click To Add New Expense這個按鈕後，會設定狀態變成true，而下面的<ExpenseForm />就會被顯示出來
  const showExpenseFormHandler = () => {
    setIsEditing(true);
  };
  const hideExpenseFormHandler = ()=>{
    setIsEditing(false);
  }

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

      {/** !isEditing 狀態為正確的話，後面的button就會顯示 */}
      {!isEditing && (
        <button onClick={showExpenseFormHandler}>
          Click To Add New Expense
        </button>
      )}

      {/*這邊的onGetExpenseData事件是用來取得子組件的資料，子組件的資料會以參數的方式傳到getExpenseDataHandler這個函式裡*/}
      {/* onHideExpenseForm是為了讓ExpenseForm.js裡面的cancel button被點擊時，能將畫面的表格移除 */}
      {isEditing && (
        <ExpenseForm
          onGetExpenseData={getExpenseDataHandler}
          onHideExpenseForm={hideExpenseFormHandler}
        />
      )}
      
    </div>
  );
};

export default NewExpense;
