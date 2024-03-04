import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        id={expense[0].id}
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        id={expense[1].id}
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        id={expense[2].id}
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        id={expense[3].id}
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
