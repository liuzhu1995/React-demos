import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './chapterThreeContext/Store'
import Provider from './Provider'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


