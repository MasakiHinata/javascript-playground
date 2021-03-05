import { Provider, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingReducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
        case PING:
            return { isPinging: true };
        case PONG:
            return { isPinging: false };
        default:
            return state;
    }
}

const pingEpic = action$ => action$.pipe(
    ofType(PING), // filter(action => action.type === 'PING') と同義
    delay(1000),
    mapTo({ type: PONG })
)

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(pingEpic);
const store = createStore(pingReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic); // store 作成後に run を実行する


const PingPong = () => {
    const dispatcher = useDispatch();
    const isPinging = useSelector((state) => state.isPinging);

    return (<div>
        <h1>is pinging: {`${isPinging}`}</h1>
        <button onClick={() => dispatcher(ping())}>Start PING</button>
    </div>)
}

export const PingPongApp = () => {
    return (
        <Provider store={store}>
            <PingPong />
        </Provider>
    )
}