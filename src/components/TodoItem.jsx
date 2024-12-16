import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updates) => {
    onUpdate(todo.id, updates);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="mb-2">
        <TodoForm 
          initialData={todo} 
          onSubmit={handleUpdate}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-2 border rounded-md mb-2 bg-white">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onUpdate(todo.id, { completed: !todo.completed })}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.title}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-sm text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;