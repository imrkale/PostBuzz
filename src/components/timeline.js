import useUser from '../hooks/use-user'
import {useContext,useEffect,useState} from 'react'
import {getPhotos} from '../services/firebase'
import usePhotos from '../hooks/use-photos'
import UserContext from '../context/user'
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/loggedInContext'


export default function Timeline()
{
    const {user} = useContext(LoggedInUserContext)
    const { photos } = usePhotos(user);
    
    return (
        <div className="container col-span-2">
          {!photos ? (
            <Skeleton count={4} width={640} height={500} className="mb-5" />
          ) : (
            // photos.map((content) => <Post key={content.docId} content={content} />)
            photos.map((content) =>(<div>{content.username}</div>))
          )}
        </div>
      );
   
   
}