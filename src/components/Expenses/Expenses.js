import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    let date = JSON.stringify(item.date);
    date=JSON.parse(date); 
    return date.slice(0,4) === filteredYear;
  });
  // const filteredExpenses = expenseArray.filter((item) => {
  //   return item.date.getFullYear() == filteredYear;
  // });

  const allExpenses = filteredExpenses.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {allExpenses.length > 0 && allExpenses}
      {allExpenses.length === 0 && (
        <h2 className="expenses-list__fallback">Found No expenses</h2>
      )}
    </Card>
  );
}
