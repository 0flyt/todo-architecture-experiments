import './App.css';
import { PropsEventsTodo } from './PropsEventsTodo/PropsEventsTodo';
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
      <p>Props and Event Todo</p>
      <PropsEventsTodo />
      <p style={{ marginTop: '100px' }}>Context and Provider Todo</p>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>

      <p style={{ marginTop: '100px' }}>One file Todo</p>
      <SimpleTodo />
    </>
  );
}

export default App;
