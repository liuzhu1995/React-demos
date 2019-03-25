import React, { Component } from 'react'
import Counter from './Counter'


class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [0, 10, 20];
    const initSum = this.initValues.reduce((prev, next) => prev + next, 0);
    console.log(initSum);
    this.state = {
      sum: initSum
    }
  }

  onCounterUpdate(newValue, previousValue) {
      const valueChange = newValue - previousValue;
      this.setState({sum: this.state.sum + valueChange});
  }

  render() {
    console.log('enter ControlPanel render');
    return (
      <div>
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]}/>
        <div>Total count：{this.state.sum}</div>
      </div>
    )
  }
}

export default ControlPanel;