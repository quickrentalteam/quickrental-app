'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native';

import { SearchBar, } from 'react-native-elements'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {fetchOrgs} from '../db/services';

import * as Actions from '../actions'; //Import your actions

class successfulLogin extends Component {
    constructor(props) {
        super(props);
        //original organization list

        this.list;
        //changing list to display
        this.state = {
            orgs: [],
        };
    }

    componentDidMount = () => {
        //Fetch organizations from database
        fetchOrgs(this);
    }

    onItem = (org) =>{
        //Navigate to Organization info screen
        this.props.navigation.navigate('Organization',{organization: org});
    }

    //Filter the original list to match the search query
    onSearch = (value) => {
        let temp = [];
        if( value.length !== 0 ){
            for (let i = 0; i < this.state.orgs.length; i++){
                if(value === this.state.orgs[i].getName()){
                    temp.push(this.state.orgs[i])
                }
            }
            if (temp.length !== 0){
                this.setState({
                    orgs: temp
                })
            }
        }else{
            this.setState({
                orgs: this.list
            })
        }


    };



    render() {
        return (
            <View style={StyleSheet.absoluteFill}>
                <View style={{backgroundColor: 'black', height:90, }}>
                    <View style={{top:25}}>
                            <SearchBar
                                darkTheme
                                onChangeText={(value => {this.onSearch(value)})}
                                placeholder='Search For Organization' />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <FlatList
                                data={this.state.orgs}
                                keyExtractor={(item,index) => index.toString()}
                                renderItem={({item}) =>
                                <View style={{padding: 5, alignItems: 'center'}}> 
                                    <TouchableOpacity onPress={() => {this.onItem(item)}}>
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
// Just by doing this, we will have access to the actions defined in out actions file (action/successfulLogin.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(successfulLogin);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
    },
    textBox:{
        backgroundColor: 'black',
        opacity: 0.7,
        width: 150,
        height: 150,
    },
    text:{
        left:20,
        top:90,
        fontSize:25,
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
    Button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    logoutText:{
        color: 'white'
    }
  });