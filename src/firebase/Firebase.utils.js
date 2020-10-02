import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdYFcqEaSWR29Ru_LxZvTrVUhINLUGbzU",
    authDomain: "crown-db-78b4a.firebaseapp.com",
    databaseURL: "https://crown-db-78b4a.firebaseio.com",
    projectId: "crown-db-78b4a",
    storageBucket: "crown-db-78b4a.appspot.com",
    messagingSenderId: "343229656004",
    appId: "1:343229656004:web:fd176720f73fb01d151291",
    measurementId: "G-QHFECDQSDF"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;