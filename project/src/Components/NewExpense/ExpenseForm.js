import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [clickAddNewExpense, setExpenseFields] = useState(false);

  const titleInputChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
  };

  const amountInputChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
  };

  const dateInputChangeHandler = (event) => {
      setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      setExpenseFields(false);
  };

  const startEditingHandler = () => {
      setExpenseFields(true);
  };

  const cancelEditingHandler = () => {
      setExpenseFields(false);
  };

  let expenseFormContent = (
      <button onClick={startEditingHandler}>Add new expense</button>
  );

  if (clickAddNewExpense) {
      expenseFormContent = (
          <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                  <div className="new-expense__control">
                      <label>Title</label>
                      <input type="text" value={enteredTitle} onChange={titleInputChangeHandler} />
                  </div>
                  <div className="new-expense__control">
                      <label>Amount</label>
                      <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountInputChangeHandler} />
                  </div>
                  <div className="new-expense__control">
                      <label>Date</label>
                      <input type="date" min="2019-01-01" max="2022-01-01" value={enteredDate} onChange={dateInputChangeHandler} />
                  </div>
              </div>
              <div className="new-expense__actions">
                  <button type="button" onClick={cancelEditingHandler}>Cancel</button>
                  <button type="submit">Add Expense</button>
              </div>
          </form>
      );
  }

  return <div className="new-expense">{expenseFormContent}</div>;
};

export default ExpenseForm;













 
