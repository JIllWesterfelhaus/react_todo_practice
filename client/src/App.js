import React from 'react';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';
import AddTodo from './AddTodo/addTodo';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
todos: []
    };
  }

render() {
  return(
    <div>
    <AddTodo add TodoFn={this.addTodo}></AddTodo>
    </div>
  );

}

componentDidMount = () => {
  const todos = localStorage.getItem('todos');
  if(todos) {
    const savedTodos = JSON.parse(todos);
    this.setState({ todos: savedTodos  });
    
  } else {
    console.log('No todos')

  }

}

addTodo = (todo) => this.setState({ todos: [...this.state.todos, todo]
})

}


export default App;
