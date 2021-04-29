import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'
import {FieldValue,firebase} from './lib/firebase'
ReactDOM.render(
 <FirebaseContext.Provider values={{firebase,FieldValue}}>
    <App />
 </FirebaseContext.Provider>,
  document.getElementById('root')
);

