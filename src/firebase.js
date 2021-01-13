import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9hI5dUlNgA8M8Dpi0n3K6hfL3TlFLGvY",
    authDomain: "twitter-clone-7d33e.firebaseapp.com",
    projectId: "twitter-clone-7d33e",
    storageBucket: "twitter-clone-7d33e.appspot.com",
    messagingSenderId: "41546573571",
    appId: "1:41546573571:web:e27320171743c887df2b36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

