import type { Todo } from '../types/Todo';

export function getTodos(): Todo[] {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
}

export function saveTodos(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateTodos(id: number, change: Partial<Todo>) {
  const todos = getTodos();
  const updated = todos.map((todo) =>
    todo.id === id ? { ...todo, ...change } : todo,
  );
  saveTodos(updated);
}

export function addTodo(text: string) {
  const todos = getTodos();
  const newTodo = { id: todos.length + 1, text: text, completed: false };
  const updatedTodos = [...todos, newTodo];
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

export function deleteTodo(id: number) {
  const idNumber = id.toString();
  localStorage.removeItem(idNumber);
}
