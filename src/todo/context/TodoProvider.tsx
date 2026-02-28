import { useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import { getTodos, saveTodos } from '../services/todoService';
import type { Todo } from '../types/Todo';

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => getTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addNewTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
