import React from 'react';
import TodoItem from '../TodoItem/todoItem';


class TodoList extends React.Component {

    render() {

     const { todos } = this.props;

    return(
        <div className='todoListContainer'>
            {
               todos.map((_todo, _index) => {
                return(
                <TodoItem updateTodoFn = {this.updatedTodo} key={_index} todo={_todo}></TodoItem>
                )

               } )
            }
        </div>
    );

}

updatedTodo = (todo) => {
    this.props.updateTodoFn(todo);
}

}

export default TodoList;