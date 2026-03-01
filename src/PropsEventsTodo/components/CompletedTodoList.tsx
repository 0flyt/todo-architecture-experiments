import type { TodoI } from '../types/Interface';
interface CompletedTodoListProps {
  todos: TodoI[];
}

export function CompletedTodoList({ todos }: CompletedTodoListProps) {
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
      {todos.map((todo) =>
        todo.completed ? (
          <p key={todo.id} style={{ textAlign: 'left', marginLeft: '10px' }}>
            {todo.text}
          </p>
        ) : null,
      )}
    </div>
  );
}
