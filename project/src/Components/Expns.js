import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expns.css';

const Expenses = (props) => {
    const [expenses, setExpenses] = useState(props.items);

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      return updatedExpenses;
    });
  };
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={deleteExpenseHandler}
        />
      ))}
  </Card>
  );
};

export default Expenses;
 