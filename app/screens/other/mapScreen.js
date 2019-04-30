import React from 'react';
import { Alert } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export class MapScreen extends React.Component {
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

    setTimeout(function(){
      Alert.alert('Your Location Has Been Entered. Press Back.');
   }, 2000);
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