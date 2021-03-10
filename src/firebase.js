// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from"firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlfz7LJOO-tyB_DghgiBGyVkVPKuOV8Q0",
    authDomain: "clone-a7aa5.firebaseapp.com",
    databaseURL: "https://clone-a7aa5.firebaseio.com",
    projectId: "clone-a7aa5",
    storageBucket: "clone-a7aa5.appspot.com",
    messagingSenderId: "200021486293",
    appId: "1:200021486293:web:95640d5b23b8bfe749505c",
    measurementId: "G-K0K1602N2J"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { db, auth };