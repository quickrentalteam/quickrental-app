import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Subs from '../components/mySubscriptions';
import OrganizationScreen from './OrganizationScreen';
import TournamentScreen from './TournamentScreen';
import { createStackNavigator } from 'react-navigation';

class SubscriptionScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: '#d7dae0', flex:1, opacity: 0.9}}>
        <Subs navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default new createStackNavigator({
    Subscription:{
      screen: SubscriptionScreen,
      navigationOptions:{
        header:null
      }
    },
    Organization:{
      screen: OrganizationScreen,
      navigationOptions:{
        headerTintColor: 'white',
        headerStyle:{
        backgroundColor: 'black'
        }
      }
    },
    Tournament:{
      screen: TournamentScreen,
      navigationOptions:{
        headerTintColor: 'white',
        headerStyle:{
        backgroundColor: 'black'
        }
      }
    }
  })
