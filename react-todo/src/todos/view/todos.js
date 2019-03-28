import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';
import './style.css';

const Todos = () => {
  return (
      <div>
        <AddTodo/>
        <TodoList/>
      </div>
  )
};
export default Todos;