import type { TodoI } from '../types/Interface';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: TodoI[];
  onToggle: (id: string) => void;
}

export function TodoList({ todos, onToggle }: TodoListProps) {
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
      {todos.map((todo) =>
        !todo.completed ? (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ) : null,
      )}
    </div>
  );
}
