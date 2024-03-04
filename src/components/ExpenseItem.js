import  "./ExpenseItem.css";


function ExpenseItem() {
  const expenseDate = new Date(2024, 2, 4);
  const expenseTitle = "Car";
  const expensePrise = "4000.00"
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrise}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
