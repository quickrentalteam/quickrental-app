import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);


import store from './store'; //Import the store
// import Home from './components/home' //Import the component file
// import TitleScreen from './screens/TitleScreen';
import Navigator from './navigation';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}

