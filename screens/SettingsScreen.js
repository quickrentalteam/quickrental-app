import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Settings from '../components/Settings';

export default class SettingsScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1,}}>
        <Settings navigation={this.props.navigation}/>
      </View>
    );
  }
}

