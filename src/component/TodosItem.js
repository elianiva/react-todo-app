import React, { Component } from 'react';

class TodosItem extends Component {
  getStyle() {
    const { completed } = this.props.todo;
    return {
      textDecoration: completed ? 'line-through' : '',
      color: completed ? '#777' : '',
      fontStyle: completed ? 'italic' : ''
    };
  }

  render() {
    const { name, completed, id } = this.props.todo;
    return (
      <div className="todos-item">
        <div className="flex-container">
          <label style={{ flex: `80%` }}>
            <input
              type="checkbox"
              onChange={this.props.onChange.bind(this, id)}
              checked={completed}
            />
            <span style={this.getStyle()}>{name}</span>
          </label>
          <div
            className="button"
            onClick={this.props.onClick.bind(this, id)}
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
}

export default TodosItem;
