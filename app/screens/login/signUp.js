import React from 'react';
import {
  View,
  Image,
  Keyboard,
  Dimensions,
  Text,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';

import { Ionicons, AntDesign } from '@expo/vector-icons';


import { FontIcons } from '../../assets/icons';
import { FontAwesome } from '../../assets/icons';
// import {Icon} from 'react-native-elements';
// import {Icon} from "react-native-vector-icons";
import { cacheFonts } from "../../../helpers/AssetsCaching";
import { GradientButton } from '../../components/';
import { scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


const USER_COOL = require('../../assets/images/user-cool.png');
const USER_STUDENT = require('../../assets/images/user-student.png');


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedType: null,
      // fontLoaded: false,
      // username: '',
      // email: '',
      // password: '',
      // confirmationPassword: '',
      // emailValid: true,
      // passwordValid: true,
      // usernameValid: true,
      // confirmationPasswordValid: true,
    };

    this.setSelectedType = this.setSelectedType.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
    // this.validatePassword = this.validatePassword.bind(this);
    // this.validateConfirmationPassword = this.validateConfirmationPassword.bind(
    //   this
    // );
    // this.signup = this.signup.bind(this);
  }

  // async componentDidMount() {
  //   await cacheFonts({
  //     light: require('../../assets/fonts/Roboto-Light.ttf'),
  //     bold: require('../../assets/fonts/Roboto-Bold.ttf'),
  //     // lightitalic: require('../../../assets/fonts/Ubuntu-Light-Italic.ttf'),
  //   });

  //   this.setState({ fontLoaded: true });
  // }
  

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/logo-light-final.png') : require('../../assets/images/logo-dark-final.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  onSignUpButtonPressed = () => {
    this.props.navigation.goBack();
  };

  onSignInButtonPressed = () => {
    this.props.navigation.navigate('Login1');
  };

  setSelectedType = selectedType =>
    LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });
    

  render = () => (
    
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>

      {/* return !fontLoaded ? (
      <Text> Loading... </Text>
    ) : ( */}
      {/* const {
        selectedType
      } = this.state; */}
      <ScrollView>

      <View style={{ alignItems: 'center' }}>
        {this.renderImage()}

        {/* <Image style={styles.logoImg} source={require('../../assets/images/logo-final.png')}/> */}
        <RkText rkType='h1'>Registration</RkText>
        <RkText style={styles.whoAreYouText}>WHO YOU ARE ?</RkText>
      </View>
      
      {/* <Text style={styles.signUpText}>Sign up</Text> */}

      <View style={styles.userTypesContainer}>
        <UserTypeItem
          label="LANDLORD"
          labelColor="#ECC841"
          image={USER_COOL}
          onPress={() => this.setSelectedType('landlord')}
          selected={this.state.selectedType === 'landlord'}
        />
        <UserTypeItem
          label="STUDENT"
          labelColor="#990000"
          image={USER_STUDENT}
          onPress={() => this.setSelectedType('student')}
          selected={this.state.selectedType === 'student'}
        />
      </View>


      <View style={styles.content}>

            {/* <FormInput
            icon= "ios-search"
            placeholder = "Name"
            returnKeyType="next"
            />

            <FormInput
              // refInput={input => (this.emailInput = input)}
              icon= "ios-search"
              // value={email}
              // onChangeText={email => this.setState({ email })}
              placeholder="Email"
              // keyboardType="email-address"
              // returnKeyType="next"
              // errorMessage={
              //   emailValid ? null : 'Please enter a valid email address'
              // }
              // onSubmitEditing={() => {
              //   this.validateEmail();
              //   this.passwordInput.focus();
              // }}
            />
            <FormInput
              // refInput={input => (this.passwordInput = input)}
              icon= "ios-search"
              // value={password}
              // onChangeText={password => this.setState({ password })}
              placeholder="Password"
              secureTextEntry
              // returnKeyType="next"
              // errorMessage={
              //   passwordValid ? null : 'Please enter at least 8 characters'
              // }
              // onSubmitEditing={() => {
              //   this.validatePassword();
              //   this.confirmationPasswordInput.focus();
              // }}
            />
            <FormInput
              // refInput={input => (this.confirmationPasswordInput = input)}
              icon= {FontIcons.profile}   
              // value={confirmationPassword}
              // onChangeText={confirmationPassword =>
              //   this.setState({ confirmationPassword })
              // }
              placeholder="Confirm Password"
              secureTextEntry
              // errorMessage={
              //   confirmationPasswordValid
              //     ? null
              //     : 'The password fields are not identics'
              // }
              // returnKeyType="go"
              // onSubmitEditing={() => {
              //   this.validateConfirmationPassword();
              //   this.signup();
              // }}
            /> */}


        <View style={{ justifyContent: 'center'}}>
        <View style={styles.widthLimit}>
        {/* <RkText rkType='moon large primary'>{FontIcons.login}</RkText> */}
          {/* <RkTextInput label={FontIcons.profile}   rkType='rounded' placeholder='Name' /> */}
          {/* <RkText rkType='moon large primary'>{FontIcons.login} </RkText> */}
          
          <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-person-outline"} />} labelStyle={styles.inputIcon} style={styles.input} placeholder='Name' /> 
          <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-mail-outline"} />} labelStyle={styles.inputIcon} style={styles.input}  placeholder='Email' />
          <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-lock-outline"} />} labelStyle={styles.inputIcon} style={styles.input}  placeholder='Password' secureTextEntry />
          <RkTextInput rkType='rounded' containerStyle={styles.inputContainer1} label = {<Ionicons name={"ios-lock-outline"} />} labelStyle={styles.inputIcon} style={styles.input}  placeholder='Confirm Password' secureTextEntry />
          <GradientButton
            style={styles.save}
            rkType='large'
            text='SIGN UP'
            onPress={this.onSignUpButtonPressed}
          />
        </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Already have an account?</RkText>
            <RkButton rkType='clear' onPress={this.onSignInButtonPressed}>
              <RkText rkType='header6'>Sign in now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
      </ScrollView>
    </RkAvoidKeyboard>
  )
}

export const UserTypeItem = props => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View
        style={[
          styles.userTypeItemContainer,
          selected && styles.userTypeItemContainerSelected,
        ]}
      >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image
          source={image}
          style={[
            styles.userTypeMugshot,
            selected && styles.userTypeMugshotSelected,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export const FormInput = props => {
  const { icon, ...otherProps } = props;
  return (
    <RkTextInput
      {...otherProps}
      // ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={<Icon name={icon} type={"simple-line-icon"} color="#7384B4" size={18} />}
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      // errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const styles = RkStyleSheet.create(theme => ({
  screen: {
    paddingHorizontal: 10,
    paddingTop: 70,
    paddingBottom: 20,
    flex: 1,
    // padding: 16,
    // flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
    // flex: 1,
    // paddingBottom: 10,
    // paddingTop: 10,
    // backgroundColor: '#293046',
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
    // alignItems: 'center',
    // flex: 1,
    // maxWidth: 275,
    // minHeight: 120,
    // justifyContent: 'space-between',
  },
  widthLimit: {
    flex: 1,
    // maxWidth: 375,
    // minHeight: 220,
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    color: 'black',
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'left',
    height: '100%',
    marginHorizontal: 10
  },
  inputContainer1: {
    backgroundColor: "white",
    // marginTop: 15,
    // paddingLeft: 15,
  },
  inputIcon: {
    color: 'red',
    fontSize: 28,
    fontWeight: '300',
    padding: 7,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
    // fontFamily: 'light',
    fontSize: 16.0,
  },
  logoImg: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  whoAreYouText: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7384B4',
    fontWeight: 'bold',
    // fontFamily: 'bold',
    fontSize: 14.0,
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    // alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
}));
