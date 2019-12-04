import React, { Component } from 'react';

class TodosForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className="title-wrapper"
        style={{ marginBottom: `1rem`, padding: `0.5rem` }}>
        <form onSubmit={this.onSubmit}>
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
              value={this.state.title}
              onChange={this.onChange}
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
}

export default TodosForm;
