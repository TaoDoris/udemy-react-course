import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  
  if (props.items.length === 0) {
    //說明如果選擇的年份沒有記帳紀錄的話，就顯示以下的資訊
    return <h2 className="expenses-list__fallback">Expenses Are Not Found</h2>;
  }


  return (
    <ul className="expenses-list">
    {
    /* 在畫面上顯示出我輸入的記帳紀錄,map這個方法會重新做出一個array,
    這邊我們就將自己做的html標籤用array的方式呈現，這樣也會render到畫面上*/
        props.items.map((item) => {
         return <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
            />
        })
    }
    </ul>
  );
}

export default ExpensesList;