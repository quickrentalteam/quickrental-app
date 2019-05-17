import * as firebase from 'firebase';
// import {Alert} from 'react-native';

const currentUser = firebase.auth().currentUser;

const getUUID = () => {
    return currentUser.uid;
};

const getDisplayName = () => {
    return currentUser.displayName;
};

const getVerification = () => {
    return currentUser.emailVerified;
};

const signOut = () => {
    firebase.auth().signOut();
};

export default signOut;
export default getUUID;
export default getDisplayName;
export default getVerification;
export default currentUser;
