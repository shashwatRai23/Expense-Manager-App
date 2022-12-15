import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const data = {
    title: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = React.useState(data);

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: +formData.amount,
      date: new Date(formData.date),
    };
    let expenseArray = JSON.parse(localStorage.getItem("expenses"));
    if (expenseArray == null) expenseArray = [];
    expenseArray.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(expenseArray));
    props.onSaveExpenseData(expenseData);

    setFormData((prevData) => {
      return {
        ...prevData,
        title: "",
        amount: "",
        date: "",
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={formData.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            name="amount"
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            name="date"
            value={formData.date}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button onClick={props.onClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
