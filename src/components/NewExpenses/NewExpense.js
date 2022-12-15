import React from "react";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = React.useState(false);
  function addExpenseHandler(){
    setAddExpense(prevState=>!prevState);
  }
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">

      {addExpense==false && <AddNewExpense onClick={addExpenseHandler}/>}
      {addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={addExpenseHandler}/>}
    </div>
  );
};

export default NewExpense;
