import React, {Component} from 'react';
import CounterContainer from './CounterContainer'

export default class ControlPanel extends Component {
  render() {
    return (
        <div>
          容器组件和展示组件
          <CounterContainer caption="First"/>
          <CounterContainer caption="Third"/>
          <CounterContainer caption="Second"/>
        </div>
    )
  }

}