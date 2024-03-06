import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses expense={expense} />
    </div>
  );
};

export default App;
