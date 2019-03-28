import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({text, completed, onToggle, onRemove}) => {
  return (
      <li>
        <input type="checkbox" checked={completed} readOnly onClick={onToggle}/>
        <span>{text}</span>
        <button onClick={onRemove}>X</button>
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