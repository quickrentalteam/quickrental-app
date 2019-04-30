import React from 'react';

import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
  RkButton,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import {
  Avatar,
  SocialBar,
} from '../../components';
import NavigationType from '../../config/navigation/propTypes';
import { GradientButton } from '../../components/';
import { UtilStyles } from '../../assets/style/styles';
import { Gallery } from '../../components/gallery';
import { Constants, MapView } from 'expo';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const moment = require('moment');

export class Article extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Apartment Details'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const articleId = this.props.navigation.getParam('id', 1);
    this.data = data.getArticle(articleId);

    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  state = {
    data: undefined,
    mapRegion: {
      latitude: 10.240582320848704, //change to values obtained from firebase
      longitude: -61.47291180683437, //change to values obtained from firebase
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  onAvatarPressed = () => {
    this.props.navigation.navigate('ProfileV1', { id: this.data.user.id });
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };


  render = () => (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 300 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
          provider={MapView.PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onPress={() => this.props.navigation.navigate('MapScreen')}
        />
      </View>
      <RkCard rkType='article'>
        {/* <Image rkCardImg source={this.data.photo} /> */}
        <View rkCardHeader>
          <SocialBar rkType='space' showLabel />
        </View>
        {/* <View style={styles.bordered}>
          <SocialBar rkType='space' showLabel />
          {/* <SocialBar /> */}
        {/* </View> */} 
        <View rkCardHeader>
          <View>
            <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
            <RkText rkType='secondary2 hintColor'>
              {moment().add(this.data.time, 'seconds').fromNow()}
            </RkText>
          </View>
          <TouchableOpacity onPress={this.onAvatarPressed}>
            <Avatar rkType='circle' img={this.data.user.photo} />
          </TouchableOpacity>
        </View>
        <View rkCardContent>
          <View>
            {/* This will contain all features of the apartment */}
            <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
          </View>
        </View>
        <View rkCardFooter>
        <RkText style={styles.title} rkType='header4'>Images</RkText>
        </View>
      </RkCard>

      <Gallery items={this.state.data.images} />

      <View style={{ alignItems: 'center' }}>
        <View style={styles.bordered}>
          <RkText style={styles.title} rkType='header4'>Interested?</RkText>
        </View>
      </View>

      <View style={styles.buttonSection}>
        <GradientButton
              style={styles.save}
              rkType='large'
              icon={<MaterialCommunityIcons name={"cellphone-android"} size={25}/>}
              text={` Message ${this.data.user.firstName} ${this.data.user.lastName}`}
              // onPress={this.onSignUpButtonPressed}
        />

        <GradientButton
              style={styles.save}
              rkType='large'
              icon={<Ionicons name={"ios-call"} size={25}/>}
              text={` Call ${this.data.user.firstName}`}
              // onPress={this.onSignUpButtonPressed}
        />

        <GradientButton
              style={styles.save}
              rkType='large'
              icon={<MaterialCommunityIcons name={"facebook-messenger"} size={25}/>}
              text={` Direct Message ${this.data.user.firstName}`}
              // onPress={this.onSignUpButtonPressed}
        />
      </View>

    </ScrollView>
  )
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  buttonSection: {
    paddingHorizontal: 17,
  },
  title: {
    marginBottom: 5,
  },
  save: {
    marginVertical: 20,
  },
  bordered: {
    marginTop: 14,
    paddingHorizontal: 24,
    paddingVertical: 15,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: theme.colors.border.base,
  },
  icon: {
    color: 'white',
  },
  iconRound: {
    marginRight: 9,
    fontSize: 29,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
}));
