import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import { TodoListCompleted } from './TodoListCompleted';

export function TodoPage() {
  return (
    <>
      <AddTodoForm />
      <div style={{ display: 'flex', margin: '10px', gap: '10px' }}>
        <TodoList />
        <TodoListCompleted />
      </div>
    </>
  );
}
