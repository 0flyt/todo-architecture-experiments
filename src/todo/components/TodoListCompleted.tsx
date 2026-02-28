import { useTodos } from '../hooks/useTodos';
import type { Todo } from '../types/Todo';

export function TodoListCompleted() {
  const { todos } = useTodos();

  const completedTodos: Todo[] = todos.filter((todo) => todo.completed == true);

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
        Slutfört
      </p>
      {completedTodos.map((todo) => (
        <p key={todo.id} style={{ textAlign: 'left', marginLeft: '10px' }}>
          {todo.text}
        </p>
      ))}
    </div>
  );
}
