import * as firebase from 'firebase';

    // Initialize Firebase
   const config = {
      apiKey: "AIzaSyDsebwMmRbyaJijCj2bgQ4I190uJPMA7m4",
    authDomain: "goalcoach-react.firebaseapp.com",
    databaseURL: "https://goalcoach-react.firebaseio.com",
    projectId: "goalcoach-react",
    storageBucket: "",
    messagingSenderId: "938205278183"
  };
  
   export const firebaseApp = firebase.initializeApp(config);