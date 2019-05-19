import * as firebase from 'firebase';
// import {Alert} from 'react-native';

export const currentUser = firebase.auth().currentUser;

export const getUUID = () => {
    if (currentUser != null)
        return currentUser.uid;
    else return "c014ae3f-ee81-40b8-99f8-b8ba787c9c2f" // Debugging purposes
};

 export const getDisplayName = () => {
    return currentUser.displayName;
};

export const getVerification = () => {
    return currentUser.emailVerified;
};

export const signOut = () => {
    firebase.auth().signOut();
};
