import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.expense[0].id}
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItem
        id={props.expense[1].id}
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpenseItem
        id={props.expense[2].id}
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpenseItem
        id={props.expense[3].id}
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
    </Card>
  );
}

export default Expenses;
