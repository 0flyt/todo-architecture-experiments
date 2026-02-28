import { createContext, useContext } from 'react';
import type { Todo } from '../types/Todo';

export interface TodoContextType {
  todos: Todo[];
  addNewTodo: (text: string) => void;
  toggleTodo: (id: number, completed: boolean) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos must be used inside TodoProvider');
  }

  return context;
};
