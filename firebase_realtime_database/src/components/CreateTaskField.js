import { useState } from 'react';
import { AddTask } from "../repository/FirebaseRepository";

export const CreateTaskField = () => {
    const [title, setTitle] = useState('')
    return (<div>
        <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => { AddTask(title) }}>Add Task</button>
    </div>)
}
