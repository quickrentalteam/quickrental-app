import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import SuccessfulLogin from '../components/successfulLogin';
import { createStackNavigator } from 'react-navigation';
import OrganizationScreen from './OrganizationScreen';
import TitleScreen from './TitleScreen';
import TournamentScreen from './TournamentScreen';

class MainScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: '#d7dae0', flex:1, opacity: 0.9}}>
        <SuccessfulLogin navigation ={this.props.navigation}/>
      </View>
    );
  }
}

export default new createStackNavigator({
  Main:{
    screen: MainScreen,
    navigationOptions:{
      header:null,
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
      title: 'Games',
      headerTintColor: 'white',
      headerStyle:{
      backgroundColor: 'black'
      }
    }
  },
  Title:{
    screen: TitleScreen
  }
})
