import type { TodoI } from '../types/Interface';

export function getTodos() {
  const stored = localStorage.getItem('propsEventsTodos');
  return stored ? JSON.parse(stored) : [];
}

export function updateTodos(todos: TodoI[]) {
  localStorage.setItem('propsEventsTodos', JSON.stringify(todos));
}
