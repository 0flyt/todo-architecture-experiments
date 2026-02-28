import { useTodos } from '../hooks/useTodos';
import type { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos, toggleTodo } = useTodos();

  const todoList: Todo[] = todos.filter((todo) => !todo.completed);

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: 'gray',
        border: '2px solid black',
        borderRadius: '15px',
      }}
    >
      <p style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>
        Saker att göra
      </p>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
}
