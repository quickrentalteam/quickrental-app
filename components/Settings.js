'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    // ToastAndroid,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import * as Actions from '../actions'; //Import your actions
import Async from './Async';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.profile = this.props.profile;
        this.async = new Async();
        this.state = {
            name: this.profile.getName(),
            email: this.profile.getEmail(),
            pass: this.profile.getPassword(),
            con_pass: '',
        }
    }

    componentDidMount = () => {
        //Fetch organizations from database
    }

    onPressAdmin = () => {
        this.props.profile.setAdmin();
        console.log(this.props.profile.getRole());
    }
    onUpdateProfile = () =>{
        let user = firebase.auth().currentUser;
        let p = this.profile;
        if (this.state.name != p.getName()){
            p.setName(this.state.name);
        }
        if (this.state.email != p.getEmail()){
            p.setEmail(this.state.email);
            user.updateEmail(this.state.email.toString()).then(function() {
                // Update successful.
                console.log(user.email);
            }).catch(function(error) {
                // An error happened.
                if(error.code === 'auth/email-already-in-use')
                    // ToastAndroid.showWithGravityAndOffset('E-mail already in use',ToastAndroid.LONG,ToastAndroid.TOP,25, 50);
                if(error.code === 'auth/invalid-email')
                    // ToastAndroid.showWithGravityAndOffset('Invalid E-mail',ToastAndroid.LONG,ToastAndroid.TOP,25, 50);    
                console.log(error.code) 
            });
        }
        if (this.state.pass != p.getPassword() && this.state.pass === this.state.con_pass){
            p.setPassword(this.state.pass);
            user.updatePassword(this.state.pass).then(function() {
                // Update successful.
              }).catch(function(error) {
                // An error happened.
                console.log(error.code);
                if(error.code === 'auth/weak-password')
                    // ToastAndroid.showWithGravityAndOffset('Weak Password',ToastAndroid.LONG,ToastAndroid.TOP,25, 50);
              });    
        };
        this.props.setProfile(p);
        this.async.storeLogin(p, user.uid);
        // ToastAndroid.showWithGravityAndOffset('Profile Updated',ToastAndroid.LONG,ToastAndroid.TOP,25, 50);

    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>Name</Text>
                        <TextInput value={this.state.name} onChange={(value)=>{this.setState({name:value.nativeEvent.text})}}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>E-mail</Text>
                        <TextInput  value={this.state.email} onChange={(value)=>{this.setState({email:value.nativeEvent.text})}}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>Change Password</Text>
                        <TextInput onChange={(value)=>{this.setState({pass:value.nativeEvent.text})}}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>Confirm Password</Text>
                        <TextInput onChange={(value)=>{this.setState({con_pass:value.nativeEvent.text})}}/>
                    </View>
                </View>
                    <TouchableOpacity style={styles.setAdmin} onPress={this.onUpdateProfile}>
                        <Text style={styles.text}>Update Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setAdmin} onPress={this.onPressAdmin}>
                        <Text style={styles.text}>Set as Admin</Text>
                    </TouchableOpacity>
            </View>

        );
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        profile:state.profileReducer.profile
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/Settings.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    container: {
      marginTop:70,
      alignItems:'center',

    },
    textHeader: {
        color: '#1E90FF',
        fontSize:15,
    },
    textBox:{
        backgroundColor: 'black',
        opacity: 0.7,
        width: 150,
        height: 150,
    },
    text:{
        fontSize:15,
        color: '#1E90FF',
      },
    setAdmin:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 55,
        width:200,
        borderWidth: 2,
        borderColor: '#1E90FF',
    },

    inputContainer: {
        width: '100%',
        padding:10, 
        borderBottomWidth:1,
    },
  });