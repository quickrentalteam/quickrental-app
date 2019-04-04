import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import SuccessfulLogin from '../components/successfulLogin';


export default class BlankScreen extends Component {

  render() {
    return (
      <View >
        <SuccessfulLogin navigation ={this.props.navigation}/>
      </View>
    );
  }
}

