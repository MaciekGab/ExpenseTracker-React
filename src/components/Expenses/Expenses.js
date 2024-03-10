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
      {props.expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
