import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { id: "e1", title: "Flowers", amount: 12.51, date: new Date(2023, 12, 14) },
  { id: "e2", title: "Gas", amount: 69.44, date: new Date(2024, 1, 3) },
  { id: "e3", title: "Shoes", amount: 78.26, date: new Date(2024, 2, 19) },
  {
    id: "e4",
    title: "Headphones",
    amount: 300.83,
    date: new Date(2024, 2, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (addedExpnese) => {
    setExpenses((prevState) => {
      return [...prevState, addedExpnese];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
