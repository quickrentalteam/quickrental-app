import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
  Alert
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../actions';

import { FontAwesome } from '../../assets/icons';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { GradientButton } from '../../components/gradientButton';
import { scaleModerate, scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';
import Async from '../../components/Async';
import Profile from '../../components/Profile';
// import Toast from 'react-native-smart-toast';

import * as firebase from 'firebase';

export class LoginV1 extends React.Component {
  constructor(props) {
    super(props);
    // global.UUID = "";
    this.state = {
        email: "",
        pass: "",
    };
    this.async = new Async();
}

static propTypes = {
  navigation: NavigationType.isRequired,
};
static navigationOptions = {
  header: null,
};

// showBottomToast = (toastMessage) => {
//   this._toast.show({
//       position: Toast.constants.gravity.bottom,
//       children: toastMessage
//   })
// }

componentDidMount() {
    // this.props.getData(); //call our action
};



setUsername = (value) =>{
    this.setState({
        email: value,
    });
};
setPassword = (value) =>{
    this.setState({
        pass: value,
    });

};

validateLogin = (email, pass) =>{
    let that = this;
    // Firebase Login Authentication
    firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user){
        let uid = user.user.uid;
        // global.UUID = user.user.uid;
        //Retrieve profile saved on phone
        that.async.getLogin(uid).then( (value) => {
            //Parse and create the profile object
            let obj = JSON.parse(value);
            let profile = new Profile();
            profile.copyObj(obj);

            //Set the profile state in Redux to be used throughout application
            that.props.setProfile(profile);
            //Navigate to Main screen
            that.props.navigation.navigate('CardView');
        
        }
        );
    }).catch((error) => {
        console.log(error.code);
        if (error.code === 'auth/invalid-email')
        {
          // this.showBottomToast('Invalid Email');
            // ToastAndroid.showWithGravityAndOffset( 'Invalid E-mail',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
        }
            
        
        if(error.code === 'auth/wrong-password')
        {
          // this.showBottomToast('Incorrect Password');
            // ToastAndroid.showWithGravityAndOffset( 'Incorrect Password',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
        }
            
    });
}

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/backgroundLoginV1.png') : require('../../assets/images/backgroundLoginV1DarkTheme.png')
  );

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: 320,
      height: 160,
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={this.getThemeImageSource(RkTheme.current)}
      />
    );
  };

  onLoginButtonPressed = () => {
    this.props.navigation.goBack();
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp');
  };

  render = () => (
    <RkAvoidKeyboard
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}
      style={styles.screen}>
      {this.renderImage()}
      <View style={styles.container}>
        <View style={styles.buttons}>
          <RkButton style={styles.button} rkType='social'>
            <RkText rkType='awesome hero accentColor'>{FontAwesome.twitter}</RkText>
          </RkButton>
          <RkButton style={styles.button} rkType='social'>
            <RkText rkType='awesome hero accentColor'>{FontAwesome.google}</RkText>
          </RkButton>
          <RkButton style={styles.button} rkType='social'>
            <RkText rkType='awesome hero accentColor'>{FontAwesome.facebook}</RkText>
          </RkButton>
        </View>
        <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-mail-outline"} />} labelStyle={styles.inputIcon} style={styles.input}  placeholder='Email' />
        <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-lock-outline"} />} labelStyle={styles.inputIcon} style={styles.input}  placeholder='Password' secureTextEntry />

        {/* <RkTextInput rkType='rounded' placeholder='Username' />
        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry /> */}
        <GradientButton
          style={styles.save}
          rkType='large'
          icon=''
          onPress={this.onLoginButtonPressed}
          text='LOGIN'
        />
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Don’t have an account? </RkText>
            <RkButton rkType='clear'>
              <RkText rkType='header6' onPress={this.onSignUpButtonPressed}> Sign up now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  )
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
      profile: state.profileReducer.profile,
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)("CardView");

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
    marginTop: 70,
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  inputIcon: {
    color: 'red',
    fontSize: 28,
    fontWeight: '300',
    padding: 7,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  save: {
    marginVertical: 9,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
}));
