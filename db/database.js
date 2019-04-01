export const URL = "https://basketball-9e231.firebaseio.com";
import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyCbIHF6AK4Kc1HK0Z9wELL7BEI3qst7-bg",
    authDomain: "basketball-9e231.firebaseapp.com",
    databaseURL: URL,
    projectId: "basketball-9e231",
    storageBucket: "basketball-9e231.appspot.com",
    messagingSenderId: "223402913199"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();