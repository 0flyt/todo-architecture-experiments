import './App.css';
import { SimpleTodo } from './simpleTodo/SimpleTodo';
import { TodoPage } from './todo/components/TodoPage';
import { TodoProvider } from './todo/context/TodoProvider';

function App() {
  const firstTodoList = [
    { id: 1, text: 'Laga mat', completed: false },
    { id: 2, text: 'Diska', completed: false },
    { id: 3, text: 'Träna', completed: false },
    { id: 4, text: 'Plugga', completed: true },
  ];
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(firstTodoList));
  }

  if (!localStorage.getItem('simpleTodos')) {
    localStorage.setItem('simpleTodos', JSON.stringify(firstTodoList));
  }

  return (
    <>
      <p>Avancerad Todo</p>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
      <p style={{ marginTop: '100px' }}>Simpel Todo</p>
      <SimpleTodo />
    </>
  );
}

export default App;
