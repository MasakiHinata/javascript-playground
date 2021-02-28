import React, {useState} from 'react';

export const FunctionalComponent = () => {
    const [isDone, setIsDone] = useState(false)
    return (<>
        <input type="checkbox" checked={isDone} onClick={() => setIsDone(!isDone)}/>
        <span>Todo</span>
    </>)
}