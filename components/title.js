'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class Title extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if( this.props.profile !== {}){
            this.props.logout();
        };
        // this.props.getData(); //call our action
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/logo.png')} style={{height:200, width: 200, top:100}}/>
                </View>
                <View style={{padding: 5,}}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => {this.props.navigation.navigate('CreateLogin')}}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{padding: 5,}}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {this.props.navigation.navigate('Login')}}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
// Just by doing this, we will have access to the actions defined in out actions file (action/Title.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Title);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      alignItems:'center',
    },
    signupText:{
        color: 'white',
        fontSize: 20,
    },
    loginText:{
        color: '#1E90FF',
        fontSize: 20,
    },
    signupButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        top:250,
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
        top:250,
    }

  });