import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle]= useState(props.title)

  const clickHandler= ()=>{
    console.log("clicked!!")
    setTitle('Updated');
    console.log(title);
  }

  const [amount, setAmount]= useState(props.amount)

  const clickHandler2= ()=>{
    setAmount(100);
    console.log(amount);
  }

  const delHandler=()=>{
    props.onDelete(props.id);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick= {clickHandler}>Change Title</button>
      <button onClick= {delHandler}>Del Expense</button>
      <button onClick= {clickHandler2}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;