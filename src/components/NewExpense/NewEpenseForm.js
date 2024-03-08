import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [enteredForm, setEnteredForm] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const titleChangeHandler = (event) => {
    // setEnteredForm((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setEnteredForm((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setEnteredForm((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
    setEnteredDate(event.target.value);
  };

  //   This method sums all handler methods above with example of usage for title value
  //   const inputChangeHandler = (id, value) => {
  //     if (id === "title") {
  //         setEnteredTitle(value);
  //     } else if (id === "amount") {
  //         setEnteredAmount(value);
  //     } else {
  //         setEnteredDate(value);
  //     }
  //   }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          {/* <input type="text" onChange={ (event) => {inputChangeHandler ("title", event.target.value)}} /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-32"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
