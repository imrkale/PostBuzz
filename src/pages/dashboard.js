import {useEffect} from 'react'
import Header from '../components/header'
import Timeline from '../components/timeline'
import SideBar from '../components/sidebar/index'
import useUser from '../hooks/use-user'
import {useContext} from 'react'
import UserContext from '../context/user'
import LoggedInUserContext from '../context/loggedInContext'

export default function Dashboard(){

    const {user:{user:{uid}}} = useContext(UserContext)
    const {user,setActiveUser} = useUser(uid)
    console.log(user)
    useEffect(() => {
        document.title = 'Instagram'
    },[])

    return(
        <LoggedInUserContext.Provider value={{user,setActiveUser}}>
            <div className="bg-gray-background">
                        <Header/>
                        <div className="grid grid-cols-2 gap-4 justify-between mx-auto max-w-screen-lg">
                            <Timeline/>
                            <SideBar/>
                        </div>
                </div>
        </LoggedInUserContext.Provider>
        
    );
}