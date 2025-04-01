import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    onAddExpense({
      name,
      amount: parseFloat(amount),
      category
    });
    
    setName('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        step="0.01"
        required
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;