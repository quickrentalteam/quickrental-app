import React from 'react'
import {
    View,
    Image,
    AsyncStorage
} from 'react-native'


export default class Splash extends React.Component {


    componentDidMount() {


        const { navigate } = this.props.navigation;


        setTimeout(function () {

            AsyncStorage.getItem("user").then((value) => {
                navigate('Login', {login: value ? true : false , user:value})
            })




        }, 3000);





    }

    render() {


        return (
            <View>
                <Image source={{uri: 'http://gifimage.net/wp-content/uploads/2018/04/login-gif-11.gif'}}
                       style={{width: 394, height: 296}}/>
            </View>
        );
    }
}

