import React, { useState } from 'react';
import uuid from 'uuid';
import Todos from './component/Todos';
import TodosForm from './component/TodosForm';
import TodosList from './data/TodosList.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState(TodosList);

  // Add todo item
  const addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      name: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Change item styling on check
  const onChange = id => {
    setTodos(
      todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      })
    );
  };

  // Delete Item
  const onClick = id => {
    setTodos([...todos].filter(todos => todos.id !== id));
  };

  return (
    <div className="container">
      <div className="title-wrapper">
        <h1 className="title">Todo App</h1>
      </div>
      <TodosForm addTodo={addTodo} />
      <Todos
        todosData={todos}
        onChange={onChange}
        onClick={onClick}
        isCompleted={todos.isCompleted}
      />
    </div>
  );
}

export default App;
