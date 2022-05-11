import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCmjYKVUDS1RA5EKCFlcscE3GlxnEiq44U",
    authDomain: "vue-firebase-project-3eedc.firebaseapp.com",
    projectId: "vue-firebase-project-3eedc",
    storageBucket: "vue-firebase-project-3eedc.appspot.com",
    messagingSenderId: "492607997914",
    appId: "1:492607997914:web:05d5af4ca3efc97fabe2e3"
  };

  // Init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp, projectAuth}