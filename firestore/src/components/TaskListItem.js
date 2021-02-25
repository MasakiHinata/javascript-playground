import { DeleteTask } from '../repository/FirestoreRepository';

export const TaskListItem = (props) => {
    return (<div style={{ marginBottom: '8px' }}>
        <input
            type="checkbox"
            checked={props.isDone}
            onChange={(e) => { console.log(e.target.checked) }} />
        <p style={{ display: 'inline' }}>{props.title}</p>
        <button
            style={{ marginLeft: '8px' }}
            onClick={() => DeleteTask(props.id)}>
            削除
        </button>
    </div>)
}