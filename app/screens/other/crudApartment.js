import React from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard,
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

import { ImagePicker, Permissions } from 'expo';
import ImageBrowser from '../../components/ImageBrowser';
import {Features} from '../../components';

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
    image: null,
    nameOnCard: '',
    price: '',
    cardCode: '',
    expireYear: 2017,
    expireMonth: 8,
    pickerVisible: false,
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
            <View style={styles.images}>
                <Image
                    style={{height: 100, width: 100}}
                    source={{uri: item.file}}
                    key={i}
                />
                <FlatList
                    numColumns={4}
                />
            </View>
        )
      }
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
        return(<ImageBrowser max={4} callback={this.imageBrowserCallback}/>);
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
                {this.state.photos.map((item,i) => this.renderImage(item,i))}
                </ScrollView>
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
}));
