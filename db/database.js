export const URL = "https://quick-rental-9e5.firebaseio.com";

// import Firebase from 'firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

 let config = {
    apiKey: "AIzaSyA1WGJAy8V2Ym7m3JrmLKvyaay-YABHJcs",
    authDomain: "quick-rental-9e5.firebaseapp.com",
    databaseURL: "https://quick-rental-9e5.firebaseio.com/",
    projectId: "quick-rental-9e5",
    storageBucket: "quick-rental-9e5.appspot.com",
    messagingSenderId: "329178222611"
  };
  
let app = firebase.initializeApp(config);
export const imgBucket = app.storage();
export const db = app.database();
export const dbCollection = firebase.firestore();