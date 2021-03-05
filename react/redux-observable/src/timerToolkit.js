import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const timerStart = (state, action) => ({
    ...state,
})

const timerStartFulfilled = (state, action) => ({
    ...state,
    counter: action.payload
})

const timerSlice = createSlice({
    name: 'timer',
    initialState: { counter: 0 },
    reducers: {
        timerStart,
        timerStartFulfilled,
    }
})

const timerStartAction = timerSlice.actions.timerStart;
const timerStartFulfilledAction = timerSlice.actions.timerStartFulfilled;

const timerEpic = action => action.pipe(
    ofType(timerStartAction.type),
    mergeMap(action =>
        timer(0, 1000).pipe(
            map(value => ({
                type: timerStartFulfilledAction.type,
                payload: value
            }))
        )
    )
)

const timerReducer = timerSlice.reducer;
const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(timerEpic);
const store = configureStore({
    reducer: timerReducer,
    middleware: [
        epicMiddleware,
        ...getDefaultMiddleware()
    ]
});
epicMiddleware.run(rootEpic);

const Timer = () => {
    const dispatcher = useDispatch()
    const counter = useSelector((state) => state.counter)

    return (<div>
        <div>{counter}</div>
        <button onClick={() => dispatcher(timerStartAction())}>start</button>
    </div>);
}

export const TimerToolkitApp = () => {
    return (<Provider store={store}>
        <Timer />
    </Provider>)
}