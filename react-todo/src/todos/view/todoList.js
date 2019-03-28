import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterTypes} from '../../constants'
import * as actions from '../actions';
import TodoItem from './todoItem';


const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
      <ul className="todo-list">
        {
          todos.map((item) => (
              <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                onToggle={() => onToggleTodo(item.id)}
                onRemove={() => onRemoveTodo(item.id)}
              />
          ))
        }
      </ul>
  )
};

const filtrationTodos = (todos, filter) => {
  console.log(todos, filter);
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('错误')
  }
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

//获取todos数组将todos映射到props
const mapStateToProps = (state) => {
  console.log(state.todos, state.filter);
  return {
    todos: filtrationTodos(state.todos, state.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(actions.toggleTodo(id))
    },
    onRemoveTodo: (id) => {
      dispatch(actions.removeTodo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);