import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

export function AddTodoForm() {
  const { addNewTodo } = useTodos();
  const [newTodo, setNewTodo] = useState<string>('');

  return (
    <>
      <button
        onClick={() => {
          addNewTodo(newTodo);
          setNewTodo('');
        }}
      >
        Lägg till
      </button>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
    </>
  );
}
