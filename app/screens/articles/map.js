import React from 'react';
import { MapView } from 'expo';

export class Map extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  state = {
    location: {coords: { latitude: 10.240582320848704, longitude: -61.47291180683437}}, //change to values from Firebase
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