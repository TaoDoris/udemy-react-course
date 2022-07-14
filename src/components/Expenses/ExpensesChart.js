import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //月份從0開始算
        // 所以可以把expenseMonth當作index索引
        // 把每年的月份的金額加到chartDataPoints的value，這樣就是更新了value的值了
        chartDataPoints[expenseMonth].value += expense.amount
    }


    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart;