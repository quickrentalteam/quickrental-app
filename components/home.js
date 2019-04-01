'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    // ToastAndroid,
    TouchableOpacity,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from './Async';
import Profile from './Profile';

import * as firebase from 'firebase';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pass: "",
        };
        this.async = new Async();
    }

    componentDidMount() {
        // this.props.getData(); //call our action
    };

    setUsername = (value) =>{
        this.setState({
            email: value,
        });
    };
    setPassword = (value) =>{
        this.setState({
            pass: value,
        });

    };

    validateLogin = (email, pass) =>{
        let that = this;
        // Firebase Login Authentication
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user){
            let uid = user.user.uid;
            //Retrieve profile saved on phone
            that.async.getLogin(uid).then( (value) => {
                //Parse and create the profile object
                let obj = JSON.parse(value);
                let profile = new Profile();
                profile.copyObj(obj);

                //Set the profile state in Redux to be used throughout application
                that.props.setProfile(profile);
                //Navigate to Main screen
                that.props.navigation.navigate('Main');
            
            });
        }).catch((error) => {
            console.log(error.code);
            if (error.code === 'auth/invalid-email')
                // ToastAndroid.showWithGravityAndOffset( 'Invalid E-mail',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
            
            if(error.code === 'auth/wrong-password')
                // ToastAndroid.showWithGravityAndOffset( 'Incorrect Password',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
        });
    }
    onPressButton = () => {
        this.validateLogin(this.state.email, this.state.pass);

    }

    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={-150} behavior='position'style={styles.container}>
                <TouchableHighlight style={{top:80, alignItems:'center'}}underlayColor='transparent' onPress={()=> {this.props.navigation.navigate('Title')}}>
                    <Image source={require('../assets/logo.png')} style={{height:200, width: 200,}} />
                </TouchableHighlight>
                <View style={styles.loginContainer}>
                    <View style={{padding:10}}>
                        <Text style={styles.text}>E-Mail</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} underlineColorAndroid="transparent" value={this.state.email} onChangeText={(value) => {this.setUsername(value)}}/>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                        </View>
                    </View>
                </View>
 
                <View style={styles.buttonContainer}>
                    <View style={{padding: 5, alignItems:'center'}}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {this.onPressButton()}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        profile: state.profileReducer.profile,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30,
        alignItems:'center',

    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    loginContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width:400,
        height:200,
        top:100,
    },
    login:{
        width:300,
        borderColor: '#1E90FF',
        borderBottomWidth:1,
    },
    text:{
        fontSize:15,
        color:'#1E90FF',
      },
    createLoginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:220,
        borderRadius: 5,
    },
    loginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1E90FF',
        top:100,
    },
    buttonText: {
        color: "#1E90FF",
        fontSize: 20,
    },
    input:{
        fontSize:20,
    },
  });