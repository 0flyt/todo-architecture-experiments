import { useEffect, useState } from 'react';
import type { TodoI } from './types/Interface';
import { TodoList } from './components/TodoList';
import { getTodos, updateTodos } from './services/todoService';
import { CompletedTodoList } from './components/CompletedTodoList';

export function PropsEventsTodo() {
  const [todos, setTodos] = useState<TodoI[]>(() => getTodos());

  useEffect(() => {
    updateTodos(todos);
  }, [todos]);

  const firstTodoList = [
    { id: '123123123', text: 'Laga mat', completed: false },
    { id: '231231231', text: 'Diska', completed: false },
    { id: '312312312', text: 'Träna', completed: false },
    { id: '112233112', text: 'Plugga', completed: true },
  ];

  if (!localStorage.getItem('propsEventsTodos')) {
    localStorage.setItem('propsEventsTodos', JSON.stringify(firstTodoList));
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  return (
    <div style={{ display: 'flex', margin: '10px', gap: '10px' }}>
      <TodoList todos={todos} onToggle={toggleTodo} />
      <CompletedTodoList todos={todos} />
    </div>
  );
}
