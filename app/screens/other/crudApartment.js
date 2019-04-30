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
  Alert,
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
import { UtilStyles } from '../../assets/style/styles';

import { ImagePicker, Permissions } from 'expo';
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

  //Navigate To Maps
  onEventButtonPress = () => {
    this.props.navigation.navigate('MapScreen');
  };

  //Alert for saving apartment and navigation to the home page 
  onSaveButtonPress = () => {

    Alert.alert(
      'Alert Title',
      'Apartment has been Saved!',
      [
        {text: 'OK', onPress: () => {this.onNavigateButtonPress}},
      ],
      {cancelable: false},
    );

    // setTimeout(function(){
  //  }, 2500);
  };

  onNavigateButtonPress = () => {
    this.props.navigation.navigate('CardView');
  }


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

  onChangedNumber (text) {
    this.setState({
        mobile: text.replace(/[^0-9]/g, ''),
    });
  }

  onPhoneTextChange(text) {
    var cleaned = ('' + text).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        var intlCode = (match[1] ? '+1 ' : ''),
            number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');

        this.setState({
            phoneNum: number
        });

        return;
    }

    this.setState({
        phoneNum: text
    });
  }

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

        <View style={[UtilStyles.columnContainer]}>
            <RkTextInput label='Apartment name' rkType='form' />

            {/* <View style={[styles.textRow]}> */}
            <View style={styles.row}>
              <RkText style={styles.txt} rkType='subtitle'>Apartment Image</RkText>
            {/* </View> */}
              <Image style={styles.image} source={{ uri: this.state.image }} defaultSource={require('../../assets/images/placeholder.png')} />
            </View>

            <View style={styles.row}>
              <RkButton rkType='outline rounded' style={UtilStyles.spaceTop} onPress={this.selectPicture}>Gallery</RkButton>
              <RkButton rkType='outline rounded' style={[UtilStyles.spaceTop, styles.align]} onPress={this.takePicture}>Camera</RkButton>
            </View>

            <RkTextInput 
              label='Price' 
              rkType='form'
              keyboardType='numeric'
              onChangeText={(text)=> this.onChangedNumber(text)}
              value={this.state.mobile}
              maxLength={10}  //setting limit of input 
            />

            <View style={styles.row}>
              <RkText rkType='subtitle'>Location</RkText>
            {/* </View> */}

              <RkButton rkType='outline rounded' style={{alignSelf: 'stretch', width: 160 }} onPress={this.onEventButtonPress}>Enter Location</RkButton>
            </View> 
            {/* add info that states user must be standing at the apartments location to automatically get location */}

            {/* onPress={() => this.props.navigation.navigate('MapScreen')} */}
            {/* <RkButton
              rkType='warning'
              onPress={this.onEventButtonPress}
              onLongPress={this.onEventButtonLongPress}>Push me!
            </RkButton> */}

            <RkTextInput 
              label='Contact' 
              rkType='form'
              onChangeText={(text) => this.onPhoneTextChange(text) }
              value={this.state.phoneNum}
              textContentType='telephoneNumber' 
              dataDetectorTypes='phoneNumber' 
              keyboardType='phone-pad' 
              maxLength={14}
            />

            <Features/>

            <View style={[styles.content]}>

              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Upload Apartment Photos</RkText>
              </View>
              <View style={styles.containerImages}>
                  <RkButton rkType='outline rounded' style={{alignSelf: 'center', width: 160 }} onPress={() => this.setState({imageBrowserOpen: true})}>
                  Upload Photos</RkButton>
                  <RkText>Your Apartment Photos</RkText>

                  <ScrollView>
                  <Grid
                    style={styles.list}
                    renderItem={this.renderImage}
                    renderPlaceholder={this.renderPlaceholder}
                    data={this.state.photos}
                    itemsPerRow={3}
                  />
                  </ScrollView>
              </View>
            
            </View>

            <View>
              <GradientButton
                rkType='large'
                icon= ''
                text='SAVE APARTMENT'
                onPress={this.onSaveButtonPress}
              />
            </View>

            {/* <RkTextInput rkType="form" secureTextEntry={true} label='Password' /> */}
          </View>




          {/* <View style={[styles.content]}>
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
                </ScrollView> */}

                {/* <ScrollView style={styles.images}>
                {this.state.photos.map((item,i) => this.renderImage(item,i))}
                </ScrollView> */}
            {/* </View>
            
          </View>
        </View>

        <View>
          <GradientButton
            rkType='large'
            icon= ''
            text='SAVE APARTMENT'
            onPress={this.onSaveButtonPress}
          />
        </View> */}
      </View>
    </RkAvoidKeyboard>
    </ScrollView>
    );
    }
}

// const ButtonTest = ({ onPress, children }) => (
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <RkText style={styles.text}>{children}</RkText>
//     </TouchableOpacity>
//   );
  

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
  row: { flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
  row1: { flex: 1, flexDirection: 'row',},
  txt: {
    paddingHorizontal: 7
  },
  image: { width: 100, height: 100 },
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
  align: {
    alignSelf: 'stretch'
  },
}));
