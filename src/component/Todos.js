import React from 'react';
import TodosItem from './TodosItem';

function Todos({ todosData, onChange, onClick }) {
  let todosItems = todosData.map(todos => {
    return (
      <TodosItem
        key={todos.id}
        completed={todos.completed}
        onChange={onChange}
        todo={todos}
        onClick={onClick}
      />
    );
  });

  return (
    <div className="todos-container">
      <h1>{todosItems}</h1>
    </div>
  );
}

export default Todos;
