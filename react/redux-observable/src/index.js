import React from 'react';
import ReactDOM from 'react-dom';
import { PingPongApp } from './ping';
import { TimerApp } from './timer';
import { TimerToolkitApp } from './timerToolkit';

ReactDOM.render(
  <React.StrictMode>
    <TimerApp />
    <TimerToolkitApp />
    <PingPongApp />
  </React.StrictMode>,
  document.getElementById('root')
);