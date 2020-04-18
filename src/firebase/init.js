import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBksuakQU3S1qUwIN8uc-mN_eMXekXPJa8",
  authDomain: "jdevs-chat.firebaseapp.com",
  databaseURL: "https://jdevs-chat.firebaseio.com",
  projectId: "jdevs-chat",
  storageBucket: "jdevs-chat.appspot.com",
  messagingSenderId: "29212098193",
  appId: "1:29212098193:web:f9690077e6f3ca8e558930"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db;
