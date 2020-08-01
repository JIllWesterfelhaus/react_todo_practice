import React from 'react';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';

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
    <TodoList></TodoList>
    <TodoItem></TodoItem>
    </div>
  );

}

componentDidMount = () => {
  const todos = localStorage.getItem('todos');
  if(todos) {
    console.log('Has todos', todos);

  } else {
    console.log('No todos')

  }

}

}


export default App;
