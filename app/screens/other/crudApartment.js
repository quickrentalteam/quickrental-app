import React from "react";
import {
  View,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  FlatList,
  Dimensions,
  Alert
} from "react-native";
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard,
  RkButton,
  RkChoice,
  RkChoiceGroup,
} from "react-native-ui-kitten";
import { GradientButton } from "../../components/";
import NavigationType from "../../config/navigation/propTypes";
import { UtilStyles } from "../../assets/style/styles";
import { ImagePicker, Permissions, Location, MapView } from "expo";
import ImageBrowser from "../../components/ImageBrowser";
import Grid from "react-native-grid-component";
import * as firebase from "firebase";
import { db, imgBucket } from "../../../db/database";


let addAptToDB = item => {
  db.ref("/apartments").push(item);
};

// const { width } = Dimensions.get("window");
// firebase.auth().signInWithEmailAndPassword("test1@mail.com", "password");
let currentUserUUID = "c014ae3f-ee81-40b8-99f8-b8ba787c9c2f";
// let currentUserUUID = firebase.auth().currentUser.uuid;
console.log(currentUserUUID);

export class CRUDApartment extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };
  static navigationOptions = {
    title: "Add Apartment".toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      aptName: "",
      streetName: "",
      price: 0,
      distance: 0,
      features: [],
      mainImg: "",
      phoneNum: "",
      postedBy: currentUserUUID,
      imageBrowserOpen: false,
      photos: [],
      locationResult: null,
      location: { coords: { latitude: 37.78825, longitude: -122.4324 } }
    };
  }

  uploadPhotos = async () => {
    this.uploadArray()
      .then(() => {
        Alert.alert("Images uploaded!");
      })
      .catch((error) => {
        Alert.alert(error);
      })
  }
  

  uploadArray = async () => {
    this.state.photos.forEach(photo => {
      this.uploadImage(photo);
    });
  }

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = imgBucket.ref().child(currentUserUUID + "/");
    return ref.put(blob);
  }

  setName = (value) =>{
    this.setState({
        aptName: value,
    });
  };

  setName = (value) =>{
    this.setState({
        streetName: value,
    });
  };

  setPrice = (value) => {
    this.setState({
      price: value,
    });
  };

  setDistance = (value) => {
    this.setState({
      distance: value,
    });
  };

  addFeature = (feature) => {
    // Check if feature already exists in array or if list is empty
    // if (!Array.isArray(this.state.features) || !array.length || this.state.features.indexOf(feature) <= -1)
    // {
      // this.setState({
      //   features: [...this.state.features, feature]
      // });

    this.state.features.push(feature);
      // console.log("weehee" + this.state.features);
    // }

    // If feature already exists in the array, remove it [Toggling]
    // else if (this.state.features.indexOf(feature) > -1)
    // {
    //   this.setState({
    //     features: this.state.features.filter(f => f != feature)
    //   })
    // }
  };

  setName = (value) => {
    this.setState({
      aptName: value
    });
  };

  setLocation = (value) => {
    this.setState({
      location: value
    });
  };

  setMainImg = (value) => {
    this.setState({
      mainImg: value
    });
  };

  setPostedBy = (value) => {
    this.setState({
      postedBy: value
    });
  };

  alertFunction = () => {
    Alert.alert(
      "Your Location Has Been Entered. Press OK to be redirected back.",
      undefined,
      [{ text: "OK", onPress: this.onNavigateButtonPress }],
      { cancelable: false }
    );
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
    this.setLocation(location);

    // setTimeout(function(){
    Alert.alert(
      "Your Location Has Been Entered.",
      undefined,
      [{ text: "OK" }],
      { cancelable: false }
    );
    // }, 2500);

    // console.log(this.state.location.coords.latitude + " " + this.state.location.coords.longitude);
  };

  //Allows Select Image Upload
  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    });
    this.setState({ image: uri });
  };

  //Allows Multiple Image Upload
  imageBrowserCallback = callback => {
    callback
      .then(photos => {
        console.log(photos);
        this.setState({
          imageBrowserOpen: false,
          photos
        });
      })
      .catch(e => console.log(e));
  };

  renderImage(item, i) {
    return (
      <View style={styles.item}>
        <Image
          style={{
            height: 160,
            width: (Dimensions.get("window").width - 50) / 3
          }}
          source={{ uri: item.file }}
          key={i}
        />
      </View>
    );
  }

  renderPlaceholder = i => <View style={styles.item} key={i} />;
  //End Multiple Image Upload

  //Navigate To Maps
  onMapButtonPress = () => {
    this._getLocationAsync();
    // this.props.navigation.navigate("MapScreen");
  };

  onNavigateButtonPress = () => {
    this.props.navigation.navigate("CardView");
  };

  //Alert for saving apartment and navigation to the home page
  onSaveButtonPress = () => {

    addAptToDB({
      aptName: this.state.aptName,
      price: this.state.price,
      features: this.state.features,
      phoneNum: this.state.phoneNum,
      // postedBy: UUID,
      location: this.state.location.coords
    });

    Alert.alert(
      "Apartment Saved!",
      "You will redirected to the Home Screen.",
      [{ text: "OK", onPress: this.onNavigateButtonPress }],
      { cancelable: false }
    );

    // setTimeout(function(){
    //  }, 2500);
  };

  onAddButtonPressed = () => {
    this.props.navigation.goBack();
  };

  onChangedNumber(text) {
    this.setState({
      price: parseInt(text.replace(/[^0-9]/g, ""))
    });
  }
  

  onPhoneTextChange(text) {
    var cleaned = ("" + text).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "",
        number = [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
          ""
        );

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
      return <ImageBrowser max={20} callback={this.imageBrowserCallback} />;
    }

    return (
      <ScrollView style={styles.screen}>
        <RkAvoidKeyboard
          onStartShouldSetResponder={() => true}
          onResponderRelease={() => Keyboard.dismiss()}
        >
          <View style={[styles.formContent]}>
            <View style={styles.row}>
              <RkText rkType="primary1">Enter Location</RkText>
              {/* </View> */}

              <RkButton
                rkType="outline rounded"
                style={{ alignSelf: "stretch", width: 210 }}
                onPress={this.onMapButtonPress}
              >
                Use Current Location
              </RkButton>
            </View>
            <View style={styles.boxWithShadow}>
              <MapView
                style={styles.mapStyle}
                region={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                provider={MapView.PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={true}
              />
            </View>
            <View style={[UtilStyles.columnContainer]}>
              {/* <View style={[styles.textRow]}> */}
              <View style={styles.row}>
                <RkText rkType="primary1"
                  style={styles.txt}
                  rkType="subtitle"
                  onChangeText={aptName => this.setState({ aptName })}
                >
                  Apartment Image
                </RkText>
                {/* </View> */}
                <Image
                  style={styles.image}
                  source={{ uri: this.state.image }}
                  defaultSource={require("../../assets/images/placeholder.png")}
                />
              </View>

              <View style={styles.row}>
                <RkButton
                  rkType="outline rounded"
                  style={UtilStyles.spaceTop}
                  onPress={this.selectPicture}
                >
                  Gallery
                </RkButton>
                <RkButton
                  rkType="outline rounded"
                  style={[UtilStyles.spaceTop, styles.align]}
                  onPress={this.takePicture}
                >
                  Camera
                </RkButton>
              </View>
              
              <RkTextInput label="Apartment Name" rkType="form" />
              <RkTextInput label="Apartment Street Name" rkType="form" />

              <RkTextInput
                label="Walking Distance"
                rkType="form"
                keyboardType="numeric"
                // onChangeText={price => this.onChangedNumber(price)}
                value={this.state.distance + "km"}
                maxLength={3} //setting limit of input
              />


              <RkTextInput
                label="Price"
                rkType="form"
                keyboardType="numeric"
                onChangeText={price => this.onChangedNumber(price)}
                value={"$" + this.state.price}
                maxLength={10} //setting limit of input
              />

              {/* add info that states user must be standing at the apartments location to automatically get location */}

              <RkTextInput
                label="Contact"
                rkType="form"
                onChangeText={text => this.onPhoneTextChange(text)}
                value={this.state.phoneNum}
                textContentType="telephoneNumber"
                dataDetectorTypes="phoneNumber"
                keyboardType="phone-pad"
                maxLength={14}
              />

              {/* FEATURES ENTRY*/}

              <View style={styles.containerAmenities}>
                <View style={[UtilStyles.section, UtilStyles.bordered]}>
                  <RkText rkType="header">Amenities</RkText>
                  <View style={[UtilStyles.rowContainer]}>
                    <View style={[UtilStyles.columnContainer, { flex: 1 }]}>
                    <RkChoiceGroup>
                      <View style={styles.componentRow}>                      
                        <RkChoice 

                        // onChangeText={aptName => this.setState({ aptName })}

                          onChange={this.addFeature("Furnished")}
                        />
                        <RkText rkType="bold" style={styles.caption}>
                          Furnished
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Studio")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Studio
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("A/C")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          A/C
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Utilities Included")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Utilities
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Laundry")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Laundry
                        </RkText>
                      </View>
                      </RkChoiceGroup>
                    </View>
                    <View style={[UtilStyles.columnContainer, { flex: 1 }]}>
                      <RkChoiceGroup>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Unfurnished")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Unfurnished
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Shared")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Shared
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Security")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Security
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Parking")}
                          />
                        <RkText rkType="bold" style={styles.caption}>
                          Parking
                        </RkText>
                      </View>
                      <View style={styles.componentRow}>
                        <RkChoice 
                          onChange={this.addFeature("Pets")}
                          />
                          
                        <RkText rkType="bold" style={styles.caption}>
                          Pets
                        </RkText>
                      </View>
                      </RkChoiceGroup>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.content]}>
                <View style={[styles.textRow]}>
                  <RkText rkType="primary1">Upload Apartment Photos</RkText>
                </View>
                <View style={styles.containerImages}>
                  <RkButton
                    rkType="outline rounded"
                    style={{ alignSelf: "center", width: 160 }}
                    onPress={() => this.setState({ imageBrowserOpen: true })}
                  >
                    Upload Photos
                  </RkButton>
                  <RkText style={{ alignSelf: "center", padding: 10 }} rkType='secondary2'>Your Apartment Photos</RkText>

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
                  rkType="large"
                  icon=""
                  text="SAVE APARTMENT"
                  onPress={this.onSaveButtonPress}
                />
              </View>
            </View>
          </View>

          
        </RkAvoidKeyboard>
      </ScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  content: {
    marginTop: 10,
    marginBottom: 10
  },
  formContent: {
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
    paddingTop: 10
  },
  textRow: {
    marginLeft: 20
  },
  images: {
    flexDirection: "row",
    paddingHorizontal: 0.5
  },

  text: {
    fontSize: 21
  },
  row: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  row1: { flex: 1, flexDirection: "row" },
  txt: {
    paddingHorizontal: 7
  },
  image: { width: 100, height: 100 },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: "#dddddd"
  },
  containerImages: {
    flex: 1,
    marginTop: 30
  },
  list: {
    flex: 1
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  align: {
    alignSelf: "stretch"
  },
  containerAmenities: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
    paddingTop: 10
  },
  componentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25
  },
  caption: {
    marginLeft: 16,
    fontSize: 15,
    margin: 10
  },
  mapStyle: { 
    flex: 1, 
    height: 300, 
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#5a91ed',
    borderBottomWidth: 0,    
    marginTop: 10,
  },
  boxWithShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 4,
  }
}));
