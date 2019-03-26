import React, {Component} from 'react';
import PropTypes from 'prop-types'



const CounterStyle = {
  margin: '15px'
};

 class Counter extends Component {

  render() {
    const {caption, onIncrement, onDecrement,value} = this.props;
    return (
        <div>
          <button style={CounterStyle} onClick={onIncrement}>+</button>
          <button style={CounterStyle} onClick={onDecrement}>-</button>
          <div>{caption} count: {value}</div>
        </div>
    )
  }

}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
export default Counter;