import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date (enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    setEnteredTitle(event.target.value);
    //console.log('Title changed:', event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    setEnteredAmount(event.target.value);
    //console.log('Amount changed:', event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    setEnteredDate(event.target.value);
    //console.log('Date changed:', event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          
          id="title"
          
          
          value={enteredTitle}        
          
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Add Expense</button>

      <div>
        <p>Entered Title: {enteredTitle}</p>
        <p>Entered Amount: {enteredAmount}</p>
        <p>Entered Date: {enteredDate}</p>
      </div>
    </form>
  );
};

export default ExpenseForm;












 
