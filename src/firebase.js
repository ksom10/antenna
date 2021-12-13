import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCd7lynjKgCXcMb6k8LvWeNDjjr9rF4uJI",
    authDomain: "antenna-695d9.firebaseapp.com",
    projectId: "antenna-695d9",
    storageBucket: "antenna-695d9.appspot.com",
    messagingSenderId: "567328084489",
    appId: "1:567328084489:web:8ea90c1716f3c5e0a39ed8",
    measurementId: "G-Z70KYDM0XE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { auth };

  export default db;