import React from 'react';
import { Alert } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import NavigationType from '../../config/navigation/propTypes';

export class MapScreen extends React.Component {

  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  static navigationOptions = {
    title: 'Map',
  };

  state = {
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
  };
  
  
  componentDidMount() {
    this._getLocationAsync();
  }

  onNavigateButtonPress = () => {
    this.props.navigation.goBack();
  }

  alertFunction = () => {
    Alert.alert(
      'Your Location Has Been Entered. Press OK to be redirected back.', undefined,
      [
        {text: 'OK', onPress: this.onNavigateButtonPress},
      ],
      {cancelable: false},
      );
  }
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }
    
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location});

    // setTimeout(function(){
        Alert.alert(
          'Your Location Has Been Entered. Press OK to be redirected back.', undefined,
          [
            {text: 'OK', onPress: this.onNavigateButtonPress},
          ],
          {cancelable: false},
          );
    // }, 2500);

    // Alert.alert(
    //   'Your Location Has Been Entered. Press OK to be redirected back.', undefined,
    //   [
    //     {text: 'OK', onPress: this.onNavigateButtonPress},
    //   ],
    //   {cancelable: false},
    //   );
 
    console.log("wee" + this.state.location.coords.latitude + " " + this.state.location.coords.longitude);
  };
  
  render() {
    return (
      <MapView
      style={{ flex: 1 }}
      region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      provider={MapView.PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
      />
      );
    }
  }