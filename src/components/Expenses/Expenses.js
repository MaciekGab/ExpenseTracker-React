import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (pickedYear) => {
    setSelectedYear(pickedYear);
  };

  console.log("SelectedYear: " + selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultFilter={selectedYear}
        onSelectFilter={selectedYearHandler}
      />
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
