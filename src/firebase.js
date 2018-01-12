import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBEV-TdW2OYnDQwFRYllwhAPn1k8dkOTWU",
    authDomain: "discover-111af.firebaseapp.com",
    databaseURL: "https://discover-111af.firebaseio.com",
    projectId: "discover-111af",
    storageBucket: "discover-111af.appspot.com",
    messagingSenderId: "100903917386"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
