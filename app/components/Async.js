import {AsyncStorage } from 'react-native';
export default class Async{
    constructor(){
    }
    storeLogin = async (profile, uid) => {
        try {
          return await AsyncStorage.setItem(uid, JSON.stringify(profile));
        } catch (error) {
          // Error saving data
        }
    };
    getLogin = async (key) =>{
        try{
            console.log(key)
            let res = await AsyncStorage.getItem(key);
            return res;
        }catch(error){
            console.log(error.message);
        }
    };
    removeProfile = async () => {
        try {
          return await AsyncStorage.removeItem('Profile', JSON.stringify(profile));
        } catch (error) {
          // Error saving data
        }
    };

}