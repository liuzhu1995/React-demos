import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from "../actions";
import {connect} from "react-redux";


class TodoItem extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    const {text, completed, onToggle, onRemove}  = this.props;
    return (
        <li className="todo-item">
          <input className="toggle" type="checkbox" checked={completed} readOnly onClick={onToggle}/>
          <label className={`text ${completed?"line-through": ""}`}>{text}</label>
          <button className="remove" onClick={onRemove}>X</button>
        </li>
    )
  }
}


TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => {
      dispatch(actions.toggleTodo(id))
    },
    onRemove: () => {
      dispatch(actions.removeTodo(id))
    }
  }
};


export default connect(null, mapDispatchToProps)(TodoItem);