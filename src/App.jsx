import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  addTodo = (data) => {
    this.setState({
      todos: [...this.state.todos, { id: nanoid(), name: data, done: false }]
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  updateTodo = (id, done) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = done
        }
        return todo
      })
    })
  }

  checkAllTodo = (checked) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        todo.done = checked
        return todo
      })
    })
  }

  clearAllDone = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.done)
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

export default App;
