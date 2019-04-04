'use strict';

import React, { Component } from 'react';
import {View,} from 'react-native';
import NewLogin from '../components/newLogin';

export default class CreateLoginScreen extends Component {


    render() {
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
                <NewLogin navigation = {this.props.navigation}/>
            </View>
        );
    }

};
