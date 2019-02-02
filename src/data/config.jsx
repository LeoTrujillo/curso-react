import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAo54gIHFui6fWljCLjRxzbtqMgyVaafQE",
  authDomain: "edteam-react-cero-1f2dc.firebaseapp.com",
  databaseURL: "https://edteam-react-cero-1f2dc.firebaseio.com",
  projectId: "edteam-react-cero-1f2dc",
  storageBucket: "edteam-react-cero-1f2dc.appspot.com",
  messagingSenderId: "38993289956"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;