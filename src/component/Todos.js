import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {
  render() {
    let todosItems = this.props.todosData.map(todos => {
      return (
        <TodosItem
          key={todos.id}
          completed={todos.completed}
          onChange={this.props.onChange}
          todo={todos}
          onClick={this.props.onClick}
        />
      );
    });
    return (
      <div className="todos-container">
        <h1>{todosItems}</h1>
      </div>
    );
  }
}

export default Todos;
