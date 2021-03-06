import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../Store'
import * as Actions from '../Actions'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }
  onChange() {
    this.setState(this.getOwnState());
  }
  componentDidMount() {
    store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption))
  }
  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption))
  }
  render() {
    const CounterStyle = {
      margin: '15px'
    };
    const {caption} = this.props;
    const value = this.state.value;
    return (
     <div>
        <button style={CounterStyle} onClick={this.onIncrement}>+</button>
        <button style={CounterStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} count: {value}</span>
    </div>
    )
  }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;