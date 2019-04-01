import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, DrawerItems} from 'react-navigation';
import { ScrollView, SafeAreaView, Image, Dimensions, View , TouchableOpacity, Text} from 'react-native';

import TitleScreen from './screens/TitleScreen';
import LoginScreen from './screens/LoginScreen';
import CreateLoginScreen from './screens/CreateLoginScreen';
import BlankScreen from './screens/BlankScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createDrawerNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';


class Nav extends Component {
    render() {
      return (
        <Navigator />
      )
    }
}

const DrawerComponent = (props) => {
    logout = () => {
        props.navigation.replace('Title');
    }
    return(
    <SafeAreaView style={{flex:1}}>
        <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./assets/logo.png')} style={{height:120, width:120}} />
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
        <TouchableOpacity style={{alignItems:'center', padding: 10, backgroundColor:'#1E90FF'}}onPress={this.logout}>
            <Text style={{fontSize:15, fontWeight:'bold', color:"white"}}>Logout</Text>
        </TouchableOpacity>    
    </SafeAreaView>
    );
}

const drawer = new createDrawerNavigator({
    Home: {
        screen: MainScreen,
    },
    Subscriptions: {
        screen: SubscriptionScreen,
    },
    Settings:{
        screen: SettingsScreen,
    },

}, {
    contentComponent: DrawerComponent
})

export const Navigator = new createStackNavigator({
    Title: {
        screen: TitleScreen,
        navigationOptions:{
            header: null,
        }
    },
    CreateLogin:{
        screen: CreateLoginScreen,
        navigationOptions:{
            title: 'Sign Up',
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: '#1E90FF'
            }
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            header:null
        }
    },
    Blank:{
        screen: BlankScreen,
        navigationOptions:{
            header:null,
        }
    },
    Main:{
        screen: drawer,
        navigationOptions:{
            header:null
        }
    }
})

const mapStateToProps = state => ({
    navigation: state.navigation,
  });

export default connect(mapStateToProps)(Nav)