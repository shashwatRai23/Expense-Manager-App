import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

export default function App() {
  let expenseArray = JSON.parse(localStorage.getItem("expenses"));
  if (expenseArray == null) expenseArray = [];
  const [expenses, setExpenses] = React.useState([
    ...expenseArray,
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
