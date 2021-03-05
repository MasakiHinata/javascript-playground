# redux-observable
[https://redux-observable.js.org/](https://redux-observable.js.org/)
```bash
yarn add redux-observable
```

### Epic

Epic → Reducerというように、Reducerの前にActionを受け取って、Actionを返す

Reducerとの違いは,内部でRxの機能が使えること

```jsx
import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// PINGというアクションを受け取ったら,１秒後にPONGというアクションを返す
// １秒後という処理をRxを使って実現している
const pingEpic = action$ => action$.pipe(
    ofType(PING), // filter(action => action.type === 'PING') と同義
    delay(1000),
    mapTo({ type: PONG })
)
```

```jsx
// START_TIMERというアクションを受け取ったら,
// Rxのtimerを使って、１秒毎にアクションを返す
const timerEpic = action => action.pipe(
    ofType(START_TIMER),
    mergeMap(action =>
        timer(1000, 1000).pipe(
						// １秒毎に、アクションを生成
            map(value => startFulfilled(value))
        )
    )
)

const startFulfilled = payload => ({ type: START_TIMER_FULFILLED, payload })
```

### Reducer

Epicで返すアクションにペイロードを含めることで、Reducer内でStateを更新できる

```jsx
const timerReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        // ...
        case START_TIMER_FULFILLED:
            return {
                counter: action.payload
            }
        // ...
    }
}
```

### Epicを適用する

```jsx
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(pingEpic); // epicをまとめる

// ミドルウェア(Epic)を適用して、Storeを作成
const store = createStore(pingReducer, applyMiddleware(epicMiddleware));

// store 作成後に run を実行する
// -> 適用される
epicMiddleware.run(rootEpic);
```