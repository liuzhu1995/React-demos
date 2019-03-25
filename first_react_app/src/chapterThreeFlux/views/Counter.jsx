import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../Actions'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onClickReduceButton = this.onClickReduceButton.bind(this);

    this.state = {
      count: CounterStore.getCounterValue()[props.caption]
    };
  }
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }
  onChange() {
    const newCount = CounterStore.getCounterValue()[this.props.caption];
    this.setState({count: newCount})
  }
  onClickAddButton() {
    Actions.increment(this.props.caption);
  }
  onClickReduceButton() {
    Actions.decrement(this.props.caption);
  }

  render() {
    const CounterStyle = {
      margin: '10px'
    };
    const {caption} = this.props;
    return (
        <div>
          <button style={CounterStyle} onClick={this.onClickAddButton}>+</button>
          <button style={CounterStyle} onClick={this.onClickReduceButton}>-</button>
          <span>{caption} count: {this.state.count}</span>
        </div>
    )
  }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;