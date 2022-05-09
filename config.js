import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCC86JbVJV5OLfQa09_UATQpS_XxZjsr5w",
    authDomain: "e-bicycle-43746.firebaseapp.com",
    projectId: "e-bicycle-43746",
    storageBucket: "e-bicycle-43746.appspot.com",
    messagingSenderId: "147954633777",
    appId: "1:147954633777:web:00b6b563b90d42a15a1910"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
