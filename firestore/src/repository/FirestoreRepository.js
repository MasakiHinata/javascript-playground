import firebase from 'firebase/app';
import 'firebase/firestore';
import Task from '../model/Task'
import { BehaviorSubject } from 'rxjs'

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
    const database = firebase.firestore()
    database.collection('tasks').add({
        title: title,
        isDone: false
    })

    GetTasks()
}

export const GetTasks = async () => {
    const database = firebase.firestore()
    const snapshot = await database.collection('tasks').get()
    let tasks = snapshot.docs.map(doc => {
        return Task.fromJson({ id: doc.id, ...doc.data() })
    })
    return tasks;
}

export const DeleteTask = async (id) => {
    const database = firebase.firestore()
    database.collection('tasks').doc(id).delete()
        .then(() => console.log('Document successfully deleted'))
        .catch((error) => console.log(`Error removing document: ${error}`))
}

export const ObserveTasks = () => {
    const database = firebase.firestore()
    const behaviourSubject = new BehaviorSubject([])
    database.collection('tasks').onSnapshot((snapshot) => {
        let tasks = snapshot.docs.map((doc) => Task.fromJson({ id: doc.id, ...doc.data() }))
        behaviourSubject.next(tasks)
    })
    return behaviourSubject.asObservable()
}