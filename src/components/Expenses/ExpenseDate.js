import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  let date = JSON.stringify(props.date);
  date = JSON.parse(date);
  const month = date.slice(5,7);
  const day = date.slice(8,10)
  const year = date.slice(0,4);
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
