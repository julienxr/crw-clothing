import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgkxnmPu1gd24tcHjfM52e-gt_EC7R2D8',
  authDomain: 'crwn-db-4f47d.firebaseapp.com',
  databaseURL: 'https://crwn-db-4f47d.firebaseio.com',
  projectId: 'crwn-db-4f47d',
  storageBucket: 'crwn-db-4f47d.appspot.com',
  messagingSenderId: '338707052172',
  appId: '1:338707052172:web:37555649ebe4579ba62da9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
