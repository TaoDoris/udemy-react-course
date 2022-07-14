import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  //預設填滿長條圖的高度為0
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    // 這邊是說如果maxValue大於0，就代表長條圖會有數據，而之後要填的高度就為我有的資料去除這個長條圖的資料的百分比去作為高度。
    // Math.round() 四捨五入
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
