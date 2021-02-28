import {useParams, useLocation} from 'react-router-dom'

export const ProfileParamWrapper = () => {
    let {name} = useParams()
    return <Profile name={name}/>
}

export const ProfileQueryWrapper = () => {
    let name = new URLSearchParams(useLocation().search).get("name")
    return <Profile name={name}/>
}

export const Profile = (props) => {
    return(<div>
        <h1>Profile</h1>
        <p>name: {props.name}</p>
    </div>)
}