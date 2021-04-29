import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyBc_cjCfRhBZPdjAYP2xISl5QAs-Tep8_g",
    authDomain: "postbuzz-a7978.firebaseapp.com",
    projectId: "postbuzz-a7978",
    storageBucket: "postbuzz-a7978.appspot.com",
    messagingSenderId: "1007795366683",
    appId: "1:1007795366683:web:203730120b5a8e5566c1be"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase)
export { firebase, FieldValue};