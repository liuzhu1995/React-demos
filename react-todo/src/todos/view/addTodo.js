import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const input = this.input;
    console.log(input);
    if(!input.value.trim()) {
      return;
    }
    this.props.onAdd(input.value);
    this.input.value = '';
  }
  refInput(node) {
    this.input = node;
  }

  render() {
    return (
        <div className="add-todo">
          <form onSubmit={this.onSubmit}>
            <input className="add-input " type="text" ref={this.refInput}/>
            <button className="add-btn">添加</button>
          </form>
        </div>
    )
  }
}

addTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (text) => {
    dispatch(addTodo(text))
  }
});


export default connect(null, mapDispatchToProps)(AddTodo)