import React from 'react'
import {
    View,
    Image,
    Button,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import PropTypes from 'prop-types';

export default class LogOut extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    LogOut = () => {


        this.props.navigation.closeDrawer()
        AsyncStorage.removeItem("user");
        this.props.navigation.navigate('Login',{login:false})

    }



    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={ this.LogOut }
                    title="LogOut"
                    color="#841584"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1
    }
})


LogOut.propTypes = {
    navigation: PropTypes.object
};
