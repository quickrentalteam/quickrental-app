import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import {
  RkSwitch,
  FindFriends,
} from '../../components';
import { FontAwesome } from '../../assets/icons';
import { DarkKittenTheme } from '../../config/darkTheme';
import { KittenTheme } from '../../config/theme';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  state = {
    sendState: false,
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
    lightThemeEnabled: true,
    darkThemeEnabled: false,
  };

  onLightThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(KittenTheme.colors.screen.base);
    }
    RkTheme.setTheme(KittenTheme);
    this.setState({ lightThemeEnabled: !this.state.lightThemeEnabled});
  };

  onDarkThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(DarkKittenTheme.colors.screen.base);
    }
    RkTheme.setTheme(DarkKittenTheme);
    this.setState({ darkThemeEnabled: !this.state.darkThemeEnabled });
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
  };

  onRefreshAutomaticallySettingChanged = (value) => {
    this.setState({ shouldRefresh: value });
  };

  onFindFriendsTwitterButtonPressed = () => {
    this.setState({ twitterEnabled: !this.state.twitterEnabled });
  };

  onFindFriendsGoogleButtonPressed = () => {
    this.setState({ googleEnabled: !this.state.googleEnabled });
  };

  onFindFriendsFacebookButtonPressed = () => {
    this.setState({ facebookEnabled: !this.state.facebookEnabled });
  };

  profileSettings = () => {
    this.props.navigation.navigate('ProfileSettings'); 
  };

  tutorial = () => {
    this.props.navigation.navigate('WalkthroughScreen'); 
  };

  logout = () => {
    Alert.alert(
      'Are you sure you want to logout?', undefined,
      [
        {text: 'Yes', onPress: this.onNavigateButtonPress}, //put function to logout here
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        
      ],
      {cancelable: false},
      );
  }

  render = () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>PROFILE SETTINGS</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton} onPress={this.profileSettings}>
            <RkText rkType='header6'>Edit Profile</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Change Password</RkText>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.row}>
          <RkText rkType='header6'>Change to Dark/Light Mode</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.sendState}
            name="Dark"
            onValueChange={this.onColorSettingChanged}
          />
        </View> */}
        <View style={styles.row}>
          <RkText rkType='header6'>Send Push Notifications</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.sendPush}
            name="Push"
            onValueChange={this.onPushNotificationsSettingChanged}
          />
        </View>
        <View style={styles.row}>
          <RkText rkType='header6'>Refresh Automatically</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.shouldRefresh}
            name="Refresh"
            onValueChange={this.onRefreshAutomaticallySettingChanged}
          />
        </View>
      </View>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>FIND FRIENDS</RkText>
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.twitter}
            text='`Find Friends With Twitter'
            icon= {FontAwesome.twitter}
            selected={this.state.twitterEnabled}
            onPress={this.onFindFriendsTwitterButtonPressed}
          />
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.google}
            text='`Find Friends With Google'
            icon={FontAwesome.google}
            selected={this.state.googleEnabled}
            onPress={this.onFindFriendsGoogleButtonPressed}
          />
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.facebook}
            text='`Find Friends With Facebook'
            icon={FontAwesome.facebook}
            selected={this.state.facebookEnabled}
            onPress={this.onFindFriendsFacebookButtonPressed}
          />
        </View>

        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>CHANGE THEME</RkText>
          </View>
          <View style={styles.row}>
            <FindFriends
              color={RkTheme.current.colors.facebook}
              text='Dark Theme'
              icon={<MaterialCommunityIcons name={"theme-light-dark"} size={20} />}
              selected={this.state.darkThemeEnabled}
              onPress={this.onDarkThemeApplyButtonPressed}
            />
          </View>
          <View style={styles.row}>
            <FindFriends
              color={RkTheme.current.colors.facebook}
              text='Light Theme'
              icon={<MaterialCommunityIcons name={"theme-light-dark"} size={20}/>}
              selected={this.state.lightThemeEnabled}
              onPress={this.onLightThemeApplyButtonPressed}
            />
          </View>
        </View>

      </View>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>SUPPORT</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Help</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton} onPress={this.tutorial}>
            <RkText rkType='header6'>Tutorial</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Privacy Policy</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Terms & Conditions</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton} onPress={this.logout}>
            <RkText rkType='header6'>Logout</RkText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
}));
