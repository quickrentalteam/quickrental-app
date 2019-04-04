'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import { fetchOrgsByKey } from '../db/services';

class mySubscriptions extends Component {
    constructor(props) {
        super(props);
        this.profile = this.props.profile;
        this.subs = this.profile.getSubscriptions();
        this.state = {
            subs: [],
        };
    }
    //Grab the profiles subscribed organization.
    componentDidMount = () => {
        fetchOrgsByKey(this, this.subs);
    }

    //Navigate to desired Organization pressed
    onPressSub = (org) => {
        this.props.navigation.navigate('Organization',{organization: org});
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerBox}>
                        <Text style={styles.headerText}>Subscriptions</Text>
                    </View>
                    <View>
                        <FlatList
                            data={this.state.subs}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({item}) =>
                            <View style={{padding: 5, alignItems: 'center'}}> 
                                <TouchableOpacity onPress={() => {this.onPressSub(item)}}>
                                    <View style={styles.orgItem}>
                                        <ImageBackground source={{uri: item.getBanner()}} style={{height:'100%', width: '100%',}}>
                                            <View style={styles.textBox}>
                                                <Text style={styles.text}>{item.name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            }
                        />
                    </View>
                    
                </View>
            </ScrollView> 
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
// Just by doing this, we will have access to the actions defined in out actions file (action/mySubscriptions.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(mySubscriptions);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      alignItems: 'center'
    },
    headerBox:{
        backgroundColor: 'black',
        width:420,
        height:60,
        bottom: 30 ,
    },
    headerText:{
        left: 10,
        top: 30,
        fontWeight: 'bold',
        fontSize:20,
        color: 'white',
    },
    bannerBox:{
        alignItems: 'center'
    },
    bannerImage:{
        width: 430,
        height: 200,
        bottom: 30,
    },
    textBox:{
        backgroundColor: 'black',
        opacity: 0.7,
        width: 150,
        height: 150,
    },
    text:{
        left:20,
        top:60,
        fontSize:20,
        color: 'white',
    },
    orgButton:{
        alignItems: 'center',
        backgroundColor: '#FF3838',
        padding: 10,
        height: 55,
    },
    orgItem:{
        height: 150,
        width:380,
    },
    subButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 55,
        width:100,
        borderWidth: 2,
        borderColor: 'white',
        left:320,
    },
    subText:{
        color: 'white'
    }
  });