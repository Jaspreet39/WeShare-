import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyATPGOEdy0H2wi2hG4EjJSE50unzPqUR4w",
  authDomain: "weshare-clone.firebaseapp.com",
  projectId: "weshare-clone",
  storageBucket: "weshare-clone.appspot.com",
  messagingSenderId: "509627985014",
  appId: "1:509627985014:web:c413629486c3c79c904357"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app()

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth}
export default db
