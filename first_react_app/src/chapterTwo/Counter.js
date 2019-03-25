import React, { Component ,} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onClickReduceButton = this.onClickReduceButton.bind(this);

    this.state = {
      count: props.initValue
    };

    console.log('enter constructor ' + this.props.caption);
  }
  onClickAddButton() {
    // this.setState({count: this.state.count + 1})
    this.updateCount(true);
  }
  onClickReduceButton() {
    // this.setState({count: this.state.count - 1})
    this.updateCount(false)
  }
  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    this.setState({count: newValue});
    this.props.onUpdate(newValue, previousValue);
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }
  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
  }
  componentWillReceiveProps(nextProps) {

    console.log('enter componentWillReceiveProps ' + this.props.caption + ' nextProps ' + nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    //只有当caption改变或者count改变时才会触发更新过程
    return (nextProps.caption !== this.props.caption) ||
        (nextState.count !== this.state.count);
  }
  render() {
    console.log('enter render ' + this.props.caption);
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
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};
Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};

export default Counter;