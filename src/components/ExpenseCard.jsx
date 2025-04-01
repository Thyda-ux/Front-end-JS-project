
import React, { useState } from 'react';

const ExpenseCard = ({ expense, onEditExpense, onDeleteExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(expense.name);
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedCategory, setEditedCategory] = useState(expense.category);

  const handleSave = () => {
    onEditExpense(expense.id, { 
      name: editedName, 
      amount: parseFloat(editedAmount),
      category: editedCategory
    });
    setIsEditing(false);
  };

  return (
    <div className="expense-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="number"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
            min="0"
            step="0.01"
          />
          <select 
            value={editedCategory} 
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{expense.name}</span>
          <span>${expense.amount.toFixed(2)}</span>
          <span>{expense.category}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ExpenseCard;