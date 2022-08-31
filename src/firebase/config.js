import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyA27e72EbpYhXgtIKmAtLqVm96h82inouY",
    authDomain: "recipe-site-9d7d4.firebaseapp.com",
    projectId: "recipe-site-9d7d4",
    storageBucket: "recipe-site-9d7d4.appspot.com",
    messagingSenderId: "908584739079",
    appId: "1:908584739079:web:028ca4b19fc8c302f4a5a2"
  };
  //init firebase
  firebase.initializeApp(firebaseConfig);
  //init services 
  const projectFirestore=firebase.firestore();

  export {projectFirestore}