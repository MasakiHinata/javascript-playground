import firebase from 'firebase/app';
import 'firebase/database';
import { BehaviorSubject } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import Task from '../model/Task';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const AddTask = (title) => {
    const database = firebase.database()
    // let task = new Task(uuidv4(), title, false)
    // database.ref(`/tasks/${task.id}`).set(task.toJson())
    let newTaskRef = database.ref('tasks').push()
    newTaskRef.set({
        id: newTaskRef.key,
        title: title,
        isDone: false
    })
}

export const UpdateIsDone = async (id, isDone) => {
    const database = firebase.database()
    database.ref('tasks').child(id).update({ isDone: isDone })
}

export const GetTasks = async () => {
    const database = firebase.database()
    const snapshots = await database.ref('/tasks').once('value')
    let tasks = []
    snapshots.forEach((snapshot) => {
        tasks.push(Task.fromJson(snapshot.toJSON()))
    })
    return tasks
}

export const DeleteTask = async (id) => {
    const database = firebase.database()
    database.ref('/tasks').child(id).remove()
}

export const ObserveTasks = () => {
    const behaviourSubject = new BehaviorSubject([])
    const database = firebase.database()
    database.ref('/tasks').on('value', (snapshots) => {
        let tasks = []
        snapshots.forEach((snapshot) => {
            tasks.push(Task.fromJson(snapshot.toJSON()))
        })
        behaviourSubject.next(tasks)
    })
    return behaviourSubject.asObservable()
}