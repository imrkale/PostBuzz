import useUser from '../hooks/use-user'
import {useContext,useEffect,useState} from 'react'
import {getPhotos} from '../services/firebase'
import UserContext from '../context/user'
import Skeleton from 'react-loading-skeleton';

export default function Timeline()
{
    const {user:{user:{uid}}}=useContext(UserContext)
    const {user} = useUser(uid);
    const photos = getPhotos(user.userId,user.following)
    photos?console.log(photos):console.log("")
    
    return <div>
        Timeline
    </div>
   
    //
    // if(photos.length==0){
    //     return <Skeleton count={3} height={100}/>
    // }
    // else{
    //     return (
    //         <div>
    //              {
    //                  photos.map(photos =>(
    //                      <p>{photos.photoId}</p>
    //                  ))
    //              }
    //         </div>
           
    // )
    // }
   
}