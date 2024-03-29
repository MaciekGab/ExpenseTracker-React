import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (pickedYear) => {
    setSelectedYear(pickedYear);
  };

  const filteredExpenses = props.expense.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultFilter={selectedYear}
        onSelectFilter={selectedYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
