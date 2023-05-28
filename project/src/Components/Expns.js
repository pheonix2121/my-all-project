import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import './Expns.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');

  useEffect(() => {
    setExpenses(props.items);
  }, [props.items]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      return updatedExpenses;
    });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>"Only single Expense here. Please add more..."</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onDelete={deleteExpenseHandler}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;