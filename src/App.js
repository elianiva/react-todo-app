import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './component/Todos';
import TodosForm from './component/TodosForm';
import TodosList from './data/TodosList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodosList
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  // Add todo item
  addTodo(title) {
    const newTodo = {
      id: uuid.v4(),
      name: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // Change item styling on check
  onChange(id) {
    this.setState({
      todos: this.state.todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      })
    });
  }

  // Delete Item
  onClick(id) {
    this.setState({
      todos: [...this.state.todos].filter(todos => todos.id !== id)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title">Todo App</h1>
        </div>
        <TodosForm addTodo={this.addTodo} />
        <Todos
          todosData={this.state.todos}
          onChange={this.onChange}
          onClick={this.onClick}
          isCompleted={this.state.isCompleted}
        />
      </div>
    );
  }
}

export default App;
