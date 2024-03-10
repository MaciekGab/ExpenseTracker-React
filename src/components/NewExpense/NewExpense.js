import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewEpenseForm";

function NewExpense(props) {
  const submitFormHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSubmitExpenseForm={submitFormHandler} />
    </div>
  );
}

export default NewExpense;
