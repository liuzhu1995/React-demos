import React, { Component } from 'react';
import './App.css';
import ClickCounter from './chapterTwo/ClickCounter'
// import ControlPanel from './chapterTwo/ControPanel'
import ControlPanelFlux from './chapterThreeFlux/views/ControlPanel'
import ControlPanelRedux from './chapterThreeRedux/views/ControlPanel'



class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter/>
        <ControlPanelFlux/>
        <ControlPanelRedux/>
      </div>
    );
  }
}

export default App;
