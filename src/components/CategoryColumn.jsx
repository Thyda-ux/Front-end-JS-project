import React from 'react';
import ExpenseCard from './ExpenseCard';

const CategoryColumn = ({ category, expenses, onEditExpense, onDeleteExpense }) => {
  return (
    <div className="category-column">
      <h2>{category}</h2>
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onEditExpense={onEditExpense}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </div>
  );
};

export default CategoryColumn;