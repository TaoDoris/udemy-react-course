import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  
  //將所有的value資料用map的方式跑出，並做成陣列
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  //Math.max(1,2,3...) 會找出括號中最大的數字
  //用展開運算符，將dataPointValue陣列中的值，一個一個拿出來放到max()的括號裡
  const totalMaximum = Math.max(...dataPointValues) 
  
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
