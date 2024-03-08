import React, { useState } from "react";
import "./NewExpenseForm.css";

//This is the same component as NewExpenseForm but it's created in the different way just to see possible code versions
function AltExpenseForm() {
  const [enteredForm, setEnteredForm] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (id, value) => {
    if (id === "title") {
      setEnteredForm((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (id === "amount") {
      setEnteredForm((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    } else {
      setEnteredForm((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    }
  };

  const clearForm = () => {
    inputChangeHandler("title", "");
    inputChangeHandler("amount", "");
    inputChangeHandler("date", "");

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredForm.enteredTitle,
      amount: enteredForm.enteredAmount,
      date: new Date(enteredForm.enteredDate),
    };

    console.log(enteredData);
    clearForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredForm.enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredForm.enteredAmount}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-32"
            value={enteredForm.enteredDate}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default AltExpenseForm;
