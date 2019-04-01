import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import OrganizationInfo from '../components/OrganizationInfo';
import { createStackNavigator } from 'react-navigation';

export default class OrganizationScreen extends Component {
    constructor(props){
        super(props);
        this.org = this.props.navigation.getParam('organization')
    }

  render() {
    return (
      <View style={{backgroundColor: '#d7dae0', flex:1, opacity: 0.9}}>
        <OrganizationInfo navigation = {this.props.navigation} organization = {this.org}/>
      </View>
    );
  }
}
