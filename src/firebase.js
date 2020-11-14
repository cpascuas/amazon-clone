import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuqI_xYuEsFC45XTZKqBr7BNIb7m1ein4",
  authDomain: "clone-f1f3b.firebaseapp.com",
  databaseURL: "https://clone-f1f3b.firebaseio.com",
  projectId: "clone-f1f3b",
  storageBucket: "clone-f1f3b.appspot.com",
  messagingSenderId: "521076658260",
  appId: "1:521076658260:web:a4762c5cf2ad65e5221dc1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
