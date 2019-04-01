export const URL = "https://quick-rental-9e5.firebaseio.com";
import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyA1WGJAy8V2Ym7m3JrmLKvyaay-YABHJcs",
    authDomain: "quick-rental-9e5.firebaseapp.com",
    databaseURL: URL,
    projectId: "quick-rental-9e5",
    storageBucket: "quick-rental-9e5.appspot.com",
    messagingSenderId: "329178222611"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();