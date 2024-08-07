import React from "react";
import ReactECharts from "echarts-for-react";
import { componentBgColor } from "../../Config/GlobalVariables";
import { Select } from "antd";

function Chart() {
  const option = {
    // title: {
    //   text: "Activity",
    //   textStyle: {
    //     color: "#ffffff",
    //     fontSize: 20,
    //     fontWeight: "bold",
    //   },
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "#ffffff",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#ffffff", // Change the font color of the x-axis labels
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [3000, 9500, 2000, 2000, 4000, 14000, 7500],
      },
    ],
  };
  return (
    <div style={{ backgroundColor: componentBgColor, padding: "0 1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Activity</h2>
        <Select
          defaultValue="weekly"
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
          ]}
          dropdownStyle={{ backgroundColor: componentBgColor }}
        />
      </div>
      <ReactECharts
        style={{
          padding: "0.5rem",
          color: "#ffffff",
        }}
        option={option}
      />
    </div>
  );
}

export default Chart;
