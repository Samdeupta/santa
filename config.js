import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDHYX9pio5acY7JteS83DnsDJFF6q6TnNk",
  authDomain: "booksanta-9c148.firebaseapp.com",
  projectId: "booksanta-9c148",
  storageBucket: "booksanta-9c148.appspot.com",
  messagingSenderId: "985142010099",
  appId: "1:985142010099:web:2c7a7ded4f9df468875786"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()