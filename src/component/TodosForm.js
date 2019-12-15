import React, { useState } from 'react';

function TodosForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const onChange = e => {
    setTitle(e.target.value);
  };

  return (
    <div
      className="title-wrapper"
      style={{ marginBottom: `1rem`, padding: `0.5rem` }}>
      <form onSubmit={onSubmit}>
        <label htmlFor="todos-form" className="form-label">
          Insert Todo Item
        </label>
        <div className="inline-form">
          <input
            type="text"
            id="todos-form"
            name="title"
            style={{ width: `65%` }}
            className="input-box"
            placeholder="Insert new todo.."
            value={title}
            onChange={onChange}
          />
          <input
            type="submit"
            className="button"
            value="Submit"
            style={{
              backgroundColor: `rgb(0, 0, 0, 0)`,
              fontSize: `1rem`,
              padding: `.4rem`,
              width: `4rem`
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default TodosForm;
