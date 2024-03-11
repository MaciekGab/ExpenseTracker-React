import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses to show.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
