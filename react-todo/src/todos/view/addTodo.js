import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value: ''
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const inputValue = this.state.value;
    if(!inputValue.trim()) {
      return;
    }
    this.props.onAdd(inputValue);
    this.setState({value: ''});
  }
  refInput(node) {
    this.input = node;
  }
  onInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
        <div className="add-todo">
          <form onSubmit={this.onSubmit}>
            <input className="add-input " type="text" onChange={this.onInputChange} value={this.state.value}/>
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