import React, {Component} from 'react';
import Counter from './Counter'
import Summary from './Summary'

export default class ControlPanel extends Component {

  render() {
    return (
        <div>
          Flux
          <Counter caption="First"/>
          <Counter caption="Second"/>
          <Counter caption="Third"/>
          <Summary/>
        </div>
    )
  }
}