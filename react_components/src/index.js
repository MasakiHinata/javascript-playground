import React from 'react';
import ReactDOM from 'react-dom';
import {FunctionalComponent} from "./FunctionalComponent";
import {ClassComponent} from "./ClassComponent";
import {FCLifeCycle} from "./FunctionalComponentLifeCycle";
import {CCLifeCycle} from "./ClassComponentLifeCycle";
import {PersonCC} from "./PersonClassComponent";
import {PersonFC} from "./PersonFunctionalComponent";

ReactDOM.render(
    <React.StrictMode>
        <FunctionalComponent/>
        <ClassComponent/>
        <FCLifeCycle/>
        <CCLifeCycle/>
        <PersonCC name={"Alice"}/>
        <PersonFC name={"Bob"}/>
    </React.StrictMode>,
    document.getElementById('root')
);