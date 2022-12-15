import Chart from "../Chart/Chart";
import React from "react";

export default function ExpensesChart(props) {
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
  for (const expense of props.expenses) {
    let date = JSON.stringify(expense.date);
    date=JSON.parse(date);
    console.log(date);
    // const expenseMonth = expense.date.getMonth();
    let expenseMonth = date.slice(5,7);
    if(expenseMonth[0]==='0')
      expenseMonth=expenseMonth.slice(1);
    console.log(expenseMonth);
    chartDataPoints[parseInt(expenseMonth)-1].value += expense.amount;
  }
  // console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
}
