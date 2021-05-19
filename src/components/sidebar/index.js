import useUser from '../../hooks/use-user'
import {useContext} from 'react'
import UserContext from '../../context/user'
import Suggestions from './suggestions'
import LoggedInUserContext from '../../context/loggedInContext'
import Skeleton from 'react-loading-skeleton';
import User from './user'

export default  function SideBar(){
    const {user} = useContext(LoggedInUserContext)
   
    if(user)
    {
        return  (
        
            <div className="p-4 ml-auto">
              <User username={user.username} fullName={user.fullName} />
              <Suggestions userId={user.userId} following={user.following} loggedInUserDocId={user.docId} />
            </div>
          );
    }
    else
    {
      if(JSON.parse(localStorage.getItem('authUser')))
      {
        return <Skeleton count={1} height={61} />
      }
      else{
        return <div>Login To Get Started</div>
      }
    }

       
    
}