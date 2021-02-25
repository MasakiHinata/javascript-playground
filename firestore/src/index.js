import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import { firebaseConfig } from './repository/FirestoreRepository'
import { CreateTaskField } from "./components/CreateTaskField";
import { TaskList } from "./components/TaskList";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <CreateTaskField />
    <TaskList />
  </React.StrictMode>,
  document.getElementById('root')
);