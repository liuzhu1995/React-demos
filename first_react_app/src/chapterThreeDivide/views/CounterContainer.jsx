import React, {Component} from 'react'
import PropTypes from 'prop-types'
import store from '../Store'
import * as Actions from '../Actions'
import Counter from './Counter'


class CounterContainer extends Component {
  constructor() {
    super(...arguments);

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

  //调用对应方法更新state
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
  }
  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }
  shouldComponentUpdate(nextProps, nextState) {
    //只有caption或者value改变时才触发更新过程
    return ((nextProps.caption !== this.props.caption) || nextState.value !== this.state.value)
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    //装载收尾时注册监听器store变化获取最新数据
    store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    //DOM卸载阶段注销监听器
    store.unsubscribe(this.onChange);
  }

  render() {
    return (
        <Counter caption={this.props.caption}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          value={this.state.value}
        />
    )
  }

}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};


export default CounterContainer;