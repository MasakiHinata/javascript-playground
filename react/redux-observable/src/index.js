import React from 'react';
import ReactDOM from 'react-dom';
import { PingPongApp } from './ping';
import { TimerApp } from './timer';

ReactDOM.render(
  <React.StrictMode>
    <TimerApp />
    <PingPongApp />
  </React.StrictMode>,
  document.getElementById('root')
);