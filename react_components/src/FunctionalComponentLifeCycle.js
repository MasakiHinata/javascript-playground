import React, {useEffect, useState} from 'react';

export const FCLifeCycle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useState`)
    });

    useEffect(() => {
        console.log(`Count updated: ${count}`)
    }, [count])

    return (<>
        <p>{`You Clicked ${count} times.`}</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </>);
}