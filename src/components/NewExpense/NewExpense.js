import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewEpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const submitFormHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const cancelNewExpenseHandler = () => {
    setIsEditing(false);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSubmitExpenseForm={submitFormHandler}
          onCalcelExpenseForm={cancelNewExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
