import React from 'react';

function TodosItem({ todo, onClick, onChange }) {
  const getStyle = () => {
    const { completed } = todo;
    return {
      textDecoration: completed ? 'line-through' : '',
      color: completed ? '#777' : '',
      fontStyle: completed ? 'italic' : ''
    };
  };

  const { name, completed, id } = todo;
  return (
    <div className="todos-item">
      <div className="flex-container">
        <label style={{ flex: `80%` }}>
          <input
            type="checkbox"
            onChange={onChange.bind(this, id)}
            checked={completed}
          />
          <span style={getStyle()}>{name}</span>
        </label>
        <div
          className="button"
          onClick={onClick.bind(this, id)}
          style={{
            backgroundColor: '#f51b2e',
            textAlign: 'center',
            borderRadius: `0.4rem`
          }}>
          <span
            style={{
              fontSize: `1rem`,
              lineHeight: `1rem`,
              verticalAlign: `middle`,
              padding: `.2rem`
            }}>
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodosItem;
