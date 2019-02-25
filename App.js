import { StyleSheet, AsyncStorage , Dimensions , TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {View,Image} from 'react-native'
import store from './app/store'; //Import the store
import List from './app/components/List' //Import the component file
import Login from './app/components/Login'
import Splash from './app/components/Splash'
import LogOut from './app/components/LogOut'
import DetailsScreen from './app/components/DetailsScreen'


import { createStackNavigator , createDrawerNavigator } from 'react-navigation';






const RootNavigator = createStackNavigator({
    Splash:{screen:Splash,
        navigationOptions : {
        header:null
    }},
    Login: {screen: Login,
        navigationOptions : {
            title:'Login',
            headerLeft:null
        }
    },
    List: {screen: List,
        navigationOptions: ({navigation}) => ({
            title:'List',
            headerBackTitle:'back',
            headerLeft:(<TouchableOpacity onPress={
            () =>

            navigation.openDrawer()


            }>
                    <Icon name="menu" size={35} />
                </TouchableOpacity>
            ),
        })
    },
    DetailsScreen: {screen: DetailsScreen,
        navigationOptions : {
            title:'Details'
        }
    }

});

const DrawerStack = createDrawerNavigator({
    Item1: {
        screen: RootNavigator,
    }
}, {
    contentComponent: LogOut,
    drawerWidth: Dimensions.get('window').width - 120,
});


class App extends React.Component {



    render() {
            return (
                <Provider store={store}>
                    <DrawerStack  />
                </Provider>
            );



    }
}


export default App;



