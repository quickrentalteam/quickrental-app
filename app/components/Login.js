import React, { Fragment } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    AsyncStorage,
    ActivityIndicator,
    BackHandler
} from 'react-native'


export default class Login extends React.Component {
    state = {
        username: '', password: '', login: false
    }
    onChangeText = (key, value) => {
        this.setState({[key]: value})
    }
    signIn = async () => {

        const { navigate } = this.props.navigation;


        const { username, password } = this.state
        try {
            // login with provider
            const user = await AsyncStorage.setItem("user", username)


            navigate('List')
        } catch (err) {
            console.log('error:', err)
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    /*
    componentWillMount() {

        const { navigate } = this.props.navigation;

        this.setState({login:this.props.navigation.getParam("login", false)});
    }
*/
    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        const { navigate } = this.props.navigation;
        if(this.props.navigation.getParam("login", false)){
            setTimeout(function () {
                navigate('List')
            }, 3000);
        }





    }

    render() {


        if (this.props.navigation.getParam("login", false)) {
            return (

                <View style={styles.center}>

                    <ActivityIndicator size="large" color="#0000ff" />

                    <Text > Hi {this.state.user} enjoy our service! </Text>
                </View>

            );
        }
        else {
            return (

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('username', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        autoCapitalize="none"
                        secureTextEntry={true}
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                    <Button
                        title='Sign In'
                        onPress={this.signIn}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    center:{

    position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


