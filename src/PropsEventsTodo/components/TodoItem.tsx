import type { TodoI } from '../types/Interface';

interface TodoItemProps {
  todo: TodoI;
  onToggle: (id: string) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <p>{todo.text}</p>
    </div>
  );
}
