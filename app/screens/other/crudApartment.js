import React from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard,
  RkButton,
} from 'react-native-ui-kitten';
import { GradientButton } from '../../components/';
import { PasswordTextInput } from '../../components/passwordTextInput';
import {
  DatePicker,
  DatePart,
} from '../../components/picker/datePicker';
import { CardInput } from '../../components/cardInput';
import { scale } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

import { ImagePicker, MapView, Location, Permissions } from 'expo';
import ImageBrowser from '../../components/ImageBrowser';
import {Features} from '../../components';

import Grid from 'react-native-grid-component';


const { width } = Dimensions.get('window')

export class CRUDApartment extends React.Component {

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Add Apartment'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    this.state = {
      imageBrowserOpen: false,
      photos: []
    }
  }

  state = {
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    image: null,
    nameOnCard: '',
    price: '',
    cardCode: '',
    expireYear: 2017,
    expireMonth: 8,
    pickerVisible: false,
    // imageBrowserOpen: false,
    // photos: []
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
  };

  //Allows Select Image Upload
  selectPicture = async () => {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          aspect: 1,
          allowsEditing: true,
      });
      if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
          allowsEditing: false,
      });
      this.setState({ image: uri });
  };

  //Allows Multiple Image Upload
  imageBrowserCallback = (callback) => {
      callback.then((photos) => {
        console.log(photos)
        this.setState({
          imageBrowserOpen: false,
          photos
        })
      }).catch((e) => console.log(e))
    }
  
  renderImage(item, i) {
    return(
        <View style={styles.item}>
            <Image
                style={{height: 160, width: (Dimensions.get('window').width - 50) / 3}}
                source={{uri: item.file}}
                key={i}
            />
        </View>
    )
  }

  renderPlaceholder = i => <View style={styles.item} key={i} />;
  //End Multiple Image Upload

  onDatePickerConfirm = (date) => {
    this.setState({
      expireMonth: date.month.key,
      expireYear: date.year,
      pickerVisible: false,
    });
  };

  onDatePickerCancel = () => {
    this.setState({ pickerVisible: false });
  };

  onAddButtonPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    if (this.state.imageBrowserOpen) {
        return(<ImageBrowser max={20} callback={this.imageBrowserCallback}/>);
      }

    return (
    <ScrollView>
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={[styles.formContent]}>
        <View>

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Name Of Apartment</RkText>
            </View>
            <RkTextInput
              rkType='rounded'
              onChangeText={(nameOnCard) => this.setState({ nameOnCard })}
              value={this.state.nameOnCard}
            />
          </View>

            <View >
                <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Display Image</RkText>
                </View>
                <Image style={styles.image} source={{ uri: this.state.image }} />
                <View style={styles.row}>
                    <ButtonTest onPress={this.selectPicture}>Gallery</ButtonTest>
                    <ButtonTest onPress={this.takePicture}>Camera</ButtonTest>
                </View>
            </View>

            <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Price</RkText>
            </View>
            <RkTextInput
              rkType='rounded'
              onChangeText={(price) => this.setState({ price })}
              value={this.state.price}
            />
          </View>

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Location</RkText>
            </View>

            <RkButton rkType='success' onPress={() => this.props.navigation.navigate('MapScreen')}>Enter Location</RkButton>
            
          </View>

          
          <Features/>
          {/* <Features></Features> */}

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Upload Apartment Photos</RkText>
            </View>
            <View style={styles.containerImages}>
                <Button
                title="Choose Images"
                onPress={() => this.setState({imageBrowserOpen: true})}
                />
                <RkText>Upload all Apartment Photos</RkText>

                <ScrollView>
                <Grid
                  style={styles.list}
                  renderItem={this.renderImage}
                  renderPlaceholder={this.renderPlaceholder}
                  data={this.state.photos}
                  itemsPerRow={3}
                />
                </ScrollView>

                {/* <ScrollView style={styles.images}>
                {this.state.photos.map((item,i) => this.renderImage(item,i))}
                </ScrollView> */}
            </View>
            
          </View>
        </View>

        <View>
          <GradientButton
            rkType='large'
            text='SAVE APARTMENT'
            onPress={this.onAddButtonPressed}
          />
        </View>
      </View>
    </RkAvoidKeyboard>
    </ScrollView>
    );
    }
}

const ButtonTest = ({ onPress, children }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <RkText style={styles.text}>{children}</RkText>
    </TouchableOpacity>
  );
  

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    marginTop: 10,
  },
  formContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  textRow: {
    marginLeft: 20,
  },
  expireDateBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  expireDateInput: {
    flex: 0.48,
    marginVertical: 10,
  },
  expireDateInnerInput: {
    textAlign: 'center',
  },
  expireDateDelimiter: {
    flex: 0.04,
  },
  balloon: {
    maxWidth: scale(250),
    padding: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: theme.colors.border.solid,
  },
  images: {
    flexDirection: 'row',
    paddingHorizontal: 0.5,
  },

  text: {
    fontSize: 21,
  },
  row: { flexDirection: 'row' },
  image: { width: 100, height: 100, backgroundColor: 'gray' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  containerImages: {
    flex: 1,
    marginTop: 30,
  },
  list: {
    flex: 1
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1,
  },
}));
