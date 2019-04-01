'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import Home from '../components/home';

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <Home navigation={this.props.navigation}/>
      </View>
    );
  }
}
