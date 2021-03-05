import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const START_TIMER = "TIMER/START"
const START_TIMER_FULFILLED = "TIMER/START_FULFILLED"

const start = () => ({ type: START_TIMER });
const startFulfilled = payload => ({ type: START_TIMER_FULFILLED, payload })

const timerEpic = action => action.pipe(
    ofType(START_TIMER),
    mergeMap(action =>
        timer(1000, 1000).pipe(
            map(value => startFulfilled(value))
        )
    )
)

const timerReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                counter: state.counter + 1
            }
        case START_TIMER_FULFILLED:
            return {
                counter: action.payload
            }
        default:
            return state;
    }
}

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(timerEpic);
const store = createStore(timerReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

const Timer = () => {
    const dispatcher = useDispatch()
    const counter = useSelector((state) => state.counter)

    return (<div>
        <div>{counter}</div>
        <button onClick={() => dispatcher(start())}>start</button>
    </div>);
}

export const TimerApp = () => {
    return (<Provider store={store}>
        <Timer />
    </Provider>)
}