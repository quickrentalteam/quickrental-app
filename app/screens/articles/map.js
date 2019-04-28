import React from 'react';

import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
  RkButton,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';
import { Constants, MapView } from 'expo';


import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const moment = require('moment');

export class Map extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Map'.toUpperCase(),
  };

  state = {
    mapRegion: {
        latitude: 10.641890,
        longitude: -61.400718,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };


  render = () => (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: width }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
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
