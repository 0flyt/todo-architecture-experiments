import { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function SimpleTodo() {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(getTodos());

  function getTodos(): Todo[] {
    const stored = localStorage.getItem('simpleTodos');

    return stored ? JSON.parse(stored) : [];
  }

  function addNewTodo(text: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => {
      const updated = [...prev, newTodo];
      saveTodos(updated);
      return updated;
    });
    setNewTodo('');
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((prev) => {
      const updated = prev.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
      saveTodos(updated);
      return updated;
    });
  }

  function saveTodos(updatedTodos: Todo[]) {
    localStorage.setItem('simpleTodos', JSON.stringify(updatedTodos));
  }

  return (
    <>
      <button onClick={() => addNewTodo(newTodo)}>Lägg till</button>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <div style={{ display: 'flex', margin: '10px', gap: '10px' }}>
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
              <div key={todo.id} style={{ display: 'flex' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked)
                  }
                />
                <p>{todo.text}</p>
              </div>
            ) : null,
          )}
        </div>
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
              <p
                key={todo.id}
                style={{ textAlign: 'left', marginLeft: '10px' }}
              >
                {todo.text}
              </p>
            ) : null,
          )}
        </div>
      </div>
    </>
  );
}
