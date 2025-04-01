import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import CategoryColumn from './components/CategoryColumn';
import TotalDisplay from './components/TotalDisplay';
import './styles/styles.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Add a new expense
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  // Edit an existing expense
  const handleEditExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  // Delete an expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Categories for grouping expenses
  const categories = ['Food', 'Transport', 'Entertainment', 'Utilities'];

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div className="category-container">
        {categories.map((category) => (
          <CategoryColumn
            key={category}
            category={category}
            expenses={expenses.filter((expense) => expense.category === category)}
            onEditExpense={handleEditExpense}
            onDeleteExpense={handleDeleteExpense}
          />
        ))}
      </div>
      <TotalDisplay total={totalExpenses} />
    </div>
  );
};

export default App;