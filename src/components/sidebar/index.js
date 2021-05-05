import useUser from '../../hooks/use-user'
import {useContext} from 'react'
import UserContext from '../../context/user'
import suggestions from './suggestions'
import Skeleton from 'react-loading-skeleton';
import User from './user'

export default  function SideBar(){
    const {user}=useContext(UserContext)
    const activeUser = useUser(user?.user?.uid);
    const Userr= activeUser.user;
    if(Userr)
    {
        return  (
        
            <div className="p-4">
              <User username={Userr.username} fullName={Userr.fullName} />
              <suggestions userId={Userr.userId} following={Userr.following} loggedInUserDocId={Userr.docId} />
            </div>
          );
    }
    else
        return <Skeleton count={1} height={61} />
    
}