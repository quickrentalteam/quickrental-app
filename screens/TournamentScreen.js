import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Tournaments from '../components/TournamentInfo'

export default class TournamentScreen extends Component {
    constructor(props){
        super(props);
        this.tourn = this.props.navigation.getParam('tournament');
    }

  render() {
    return (
      <View style={{backgroundColor: '#d7dae0', flex:1, opacity: 0.9}}>
        <Tournaments navigation ={this.props.navigation} tournament = {this.tourn}/>
      </View>
    );
  }
}

