## Firestore
### Install
```bash
yarn add firebase
```

### 初期化
```js
import firebase from `firebase/app`;

const var firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://myapp-project-123.firebaseio.com",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

### Firestoreの取得
```js
import firebase from 'firebase/app';
import 'firebase/firestore';

const database = firebase.firestore()
```

### Firestoreのデータを扱う
#### Firestoreに保存できるデータとして変換する
```js
toJson(){
    return {
        id: this.id,
        title: this.title,
        isDone: this.isDone
    }
}
```
#### Firestoreからもらったデータをオブジェクトとして扱う
```js
static fromJson(json) {
    return new Task(json.id, json.title, json.isDone);
}
```

### ドキュメントの作成
```js
const database = firebase.firestore()
database.collection('tasks').add({
    title: title,
    isDone: false
})
```

### ドキュメントの取得
```js
const database = firebase.firestore()
const snapshot = await database.collection('tasks').get()
let tasks = snapshot.docs.map(doc => {
    return Task.fromJson({ id: doc.id, ...doc.data() })
})
```

### ドキュメントの削除
```js
const database = firebase.firestore()
database.collection('tasks').doc(id).delete()
    .then(() => console.log('Document successfully deleted'))
    .catch((error) => console.log(`Error removing document: ${error}`))
```

### スナップショットを取得
```js
const database = firebase.firestore()
const behaviourSubject = new BehaviorSubject([])
database.collection('tasks').onSnapshot((snapshot) => {
    let tasks = snapshot.docs.map((doc) => Task.fromJson({ id: doc.id, ...doc.data() }))
    behaviourSubject.next(tasks)
})
```