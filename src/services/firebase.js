import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.length > 0;
}
export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;
}

export async function getPhotos(userId, following) {
  // [5,4,2] => following
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', [...following,userId])
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }));
  return userFollowedPhotos;
}

export async function  updateLoggedInUserFollowing(loggedInUserDocId, profileId, isfollowing) 
{
  return await firebase.firestore().collection('users').doc(loggedInUserDocId)
  .update({following: isfollowing?FieldValue.arrayRemove(profileId):FieldValue.arrayUnion(profileId)})

}
export async function updateFollowedUserFollowers(
  profileDocId, // the user that karl requests to follow//
  loggedInUserDocId, //currently logged in user document id (karl's profile)
  isFollowingProfile // true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId)
    });
}


export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection('users');

  if (following.length > 0) {
    query = query.where('userId', 'not-in', [...following, userId]);

  } else {
    query = query.where('userId', '!=', userId);
  }
  const result = await query.limit(10).get();
  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }));
  console.log(profiles)

  return profiles;
}
