import React from "react";
import "./DummyChart.css";

export default function DummyChart() {
  const dataPoints = [80, 120, 60, 150, 100, 90];

  return (
    <>
      <h2>Dummy Chart</h2>
      <div className="chart-container">
        {dataPoints.map((height, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}
