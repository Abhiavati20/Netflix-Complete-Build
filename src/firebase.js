import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAlP8-1tP9OuD1kC3P7fRiguMPfWcf_LhM",
    authDomain: "netflix-full-build.firebaseapp.com",
    projectId: "netflix-full-build",
    storageBucket: "netflix-full-build.appspot.com",
    messagingSenderId: "757005996684",
    appId: "1:757005996684:web:91278f1ee99e99ed48e1a9",
    measurementId: "G-EZNGNY03SJ"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth =firebase.auth();
export {auth,firebaseApp};
export default db;