import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({text, completed, onToggle, onRemove}) => {
  return (
      <li className="todo-item">
        <input className="toggle" type="checkbox" checked={completed} readOnly onClick={onToggle}/>
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>X</button>
      </li>
  )
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
export default TodoItem;