import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {FilterTypes} from '../../constants'
import TodoItem from './todoItem';
import {selectVisibleTodos} from '../selector';


const TodoList = ({todos}) => {
  return (
      <ul className="todo-list">
        {
          todos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                typeId={item.typeId}
                text={item.text}
                completed={item.completed}
              />
          ))
        }
      </ul>
  )
};

// const filtrationTodos = (todos, filter) => {
//   console.log(todos, filter);
//   switch (filter) {
//     case FilterTypes.ALL:
//       return todos;
//     case FilterTypes.COMPLETED:
//       return todos.filter(item => item.completed);
//     case FilterTypes.UNCOMPLETED:
//       return todos.filter(item => !item.completed);
//     default:
//       throw new Error('错误')
//   }
// };

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

//获取todos数组将todos映射到props
const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state),
    // todos: filtrationTodos(state.todos, state.filter)
  }
};


export default connect(mapStateToProps, null)(TodoList);