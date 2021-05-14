import useUser from '../hooks/use-user'
import {useContext,useEffect,useState} from 'react'
import {getPhotos} from '../services/firebase'
import UserContext from '../context/user'
import Skeleton from 'react-loading-skeleton';

export default function Timeline()
{
    const {user:{user:{uid}}}=useContext(UserContext)
    const activeUser = useUser(uid);
    const [photos,setPhotos]=useState([])
    useEffect(() => {

        async function getPosts(){
            const photoss= await getPhotos(activeUser?.user?.userId,activeUser?.user?.following);
            setPhotos(photoss)
        }
        activeUser&&getPosts()

    },[activeUser])
    return <div>
         {
             !photos?(<Skeleton count={3} height={100}/>):
              photos.map(photos =>(
                         <p>{photos.photoId}</p>
                     ))
        }
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