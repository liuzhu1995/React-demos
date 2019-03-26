import React, {Component} from 'react';
import CounterContainer from './CounterContainer'
import SummaryContainer from './SummaryContainer'

export default class ControlPanel extends Component {
  render() {
    return (
        <div>
          Context
          <CounterContainer caption="First"/>
          <CounterContainer caption="Third"/>
          <CounterContainer caption="Second"/>
          <SummaryContainer/>
        </div>
    )
  }

}