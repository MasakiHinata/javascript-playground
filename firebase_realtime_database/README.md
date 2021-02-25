## Firebase RealTime Database
[公式ドキュメント](https://firebase.google.com/docs/database?authuser=0)

### Install
```
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

## データの操作

### データを追加

```jsx
const database = firebase.database()
let task = new Task(uuidv4(), title, false)
database.ref(`/tasks/${task.id}`).set(task.toJson())
```

```jsx
// pushを使用すると、リスト内で衝突しないように参照が作成される
const database = firebase.database()
let newRef = database.ref('tasks').push()
newRef.set({
    id: newTaskRef.key,
    title: title,
    isDone: isDone
})
```

### データを更新

```jsx
const database = firebase.database()
database.ref('tasks').child(id).update({ isDone: isDone })
```

### データを削除

```jsx
const database = firebase.database()
database.ref('/tasks').child(id).remove()
```

## データの読み取り

### １度だけ取得

```jsx
const database = firebase.database()
const snapshots = await database.ref('/tasks').once('value')
let tasks = []
snapshots.forEach((snapshot) => {
    tasks.push(Task.fromJson(snapshot.toJSON()))
})
return tasks
```

### データを監視

```jsx
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
```

### valueイベントのリッスン

パスのコンテンツ全体に対する変更の読み取りとリッスンをする

単一のオペレーションでリストのすべての子を取得する場合に利用する

### childイベントのリッスン

```jsx
var commentsRef = firebase.database().ref('post-comments/' + postId);
commentsRef.on('child_added', (data) => {
	// アイテムのリストへの追加が追加されると
  //   既存の子ごとに1回呼ばれる
	// 追加された子のデータを含んでいるスナップショットが渡される
});

commentsRef.on('child_changed', (data) => {
  // リスト内の項目が修正されると呼ばれる
  //   子ノードの子孫に対する変更も含まれる
  // 子ノードの更新済みのデータを含むスナップショットが渡される
});

commentsRef.on('child_removed', (data) => {
  // 直接の子が削除されると呼ばれる
  // 削除された子のデータが渡される
});
```