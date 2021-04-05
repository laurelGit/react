import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEIKpzZkUhciUJAY8Uw-pOYnrJotiZpE",
  authDomain: "facebook-clone-e298e.firebaseapp.com",
  projectId: "facebook-clone-e298e",
  storageBucket: "facebook-clone-e298e.appspot.com",
  messagingSenderId: "678966216695",
  appId: "1:678966216695:web:70ab032cbddf0fa16f10f2",
  measurementId: "G-YWJK5HG1EM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;