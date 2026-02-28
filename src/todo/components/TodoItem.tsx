// import { useTodos } from '../hooks/useTodos';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number, completed: boolean) => void;
}
export function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  //   const { toggleTodo } = useTodos();
  return (
    <>
      <div key={todo.id} style={{ display: 'flex' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => toggleTodo(todo.id, event.target.checked)}
        />
        <p>{todo.text}</p>
      </div>
    </>
  );
}
