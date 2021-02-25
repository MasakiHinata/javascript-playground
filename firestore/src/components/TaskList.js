import { useEffect, useState } from 'react';
import { TaskListItem } from "./TaskListItem";
import { ObserveTasks } from '../repository/FirestoreRepository'

export const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        ObserveTasks().subscribe((tasks) => {
            setTasks(tasks)
        })
    }, [])
    
    return (<div style={{paddingTop: '8px'}}>
        {
            tasks.map((task, i) => {
                return <TaskListItem key={i} id={task.id} title={task.title} isDone={task.isDone} />
            })
        }
    </div>)
}