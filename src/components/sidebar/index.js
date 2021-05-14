import useUser from '../../hooks/use-user'
import {useContext} from 'react'
import UserContext from '../../context/user'
import Suggestions from './suggestions'
import Skeleton from 'react-loading-skeleton';
import User from './user'

export default  function SideBar(){
    const {user}=useContext(UserContext)
    const activeUser = useUser(user?.user?.uid);
    const Userr= activeUser.user;
    if(Userr)
    {
        return  (
        
            <div className="p-4 ml-auto">
              <User username={Userr.username} fullName={Userr.fullName} />
              <Suggestions userId={Userr.userId} following={Userr.following} loggedInUserDocId={Userr.docId} />
            </div>
          );
    }
    else
    {
      if(JSON.parse(localStorage.getItem('authUser')))
      {
        return <Skeleton count={5} height={61} />
      }
      else{
        return <div>Login To Get Started</div>
      }
    }

       
    
}