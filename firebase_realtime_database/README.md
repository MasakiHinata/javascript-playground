## Firebase RealTime Database
[公式ドキュメント](https://firebase.google.com/docs/web/setup?authuser=0#non-default-hosting-site)

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