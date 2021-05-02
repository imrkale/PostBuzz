import useUser from '../hooks/use-user'
import {useContext} from 'react'
import UserContext from '../context/user'
export default function SideBar(){
    const {user}=useContext(UserContext)
    const {activeUser} = useUser(user.user.uid);
    console.log(activeUser)
    return <p>I am Timelin</p>
}