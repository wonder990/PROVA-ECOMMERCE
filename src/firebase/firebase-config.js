import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRZFSV5WsUucLbrcXfMNThjCkafpXv9BE",
  authDomain: "prova-41150.firebaseapp.com",
  projectId: "prova-41150",
  storageBucket: "prova-41150.appspot.com",
  messagingSenderId: "156955465300",
  appId: "1:156955465300:web:498481ad7d7f8a538f3fc1",
  measurementId: "G-N4X7Y7DH0D"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
