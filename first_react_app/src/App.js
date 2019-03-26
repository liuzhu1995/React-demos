import React, { Component } from 'react';
import './App.css';
import ClickCounter from './chapterTwo/ClickCounter'
// import ControlPanel from './chapterTwo/ControPanel'
import ControlPanelFlux from './chapterThreeFlux/views/ControlPanel'
import ControlPanelRedux from './chapterThreeRedux/views/ControlPanel'
import ControlPanelModule from './chapterThreeDivide/views/ControlPanel'
import ControlPanelContext from './chapterThreeContext/views/ControlPanel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter/>
        <ControlPanelFlux/>
        <ControlPanelRedux/>
        <ControlPanelModule/>
        <ControlPanelContext/>
      </div>
    );
  }
}

export default App;
