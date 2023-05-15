import React, { useState } from 'react';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(title, amount, date);

   
    setTitle('');
    setAmount('');
    setDate('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log('Title changed:', event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log('Amount changed:', event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log('Date changed:', event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;






 
