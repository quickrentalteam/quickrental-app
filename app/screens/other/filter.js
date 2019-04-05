import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
  RkChoiceGroup,
  RkChoice,
  RkButton,
} from 'react-native-ui-kitten';
import {
  RkSwitch,
  FindFriends,
  GradientButton,
} from '../../components';
import PropTypes from 'prop-types';
import Slider from "react-native-slider";
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontIcons } from '../../assets/icons';
import { FontAwesome } from '../../assets/icons';
import { UtilStyles } from '../../assets/style/styles';

export class Filter extends React.Component {
  static navigationOptions = {
    title: 'Filter Component',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    settingsOption: {
        index: 0,
        name: 'All Girls',
      },
      onChangeHandleText: 'Co-ed Selected',
      value: 0.2,
  };

  onOptionsGroupValueChanged = (index) => {
    this.setState({ onChangeHandleText: `Option ${index + 1} selected` });
  };

  onSettingsOptionChange = (option) => {
    this.setState({ settingsOption: option });
  };

  onSettingsButtonPress = () => {
    this.props.navigation.navigate('Settings', {
      option: this.state.settingsOption,
      onChange: this.onSettingsOptionChange,
    });
  };

  onCustomizationButtonPress = () => {
    this.props.navigation.navigate('ChoiceCustomization', {
      option: this.state.settingsOption,
      onChange: this.onSettingsOptionChange,
    });
  };

  render = () => (
    <ScrollView style={styles.container} automaticallyAdjustContentInsets={true}>

    <View style={{ alignItems: 'center' }}>
        {/* {this.renderImage()} */}
        <RkText rkType='h1'>Advanced Search</RkText>
    </View>
    <View style={[styles.headerTop, styles.bordered]}>
        <View style={styles.rowButtonTop}>
            <View style={styles.buttons}>
                <RkButton style={styles.buttontop} rkType='icon circle'>
                <RkText rkType='moon large primary'> {<Ionicons name={"ios-heart-outline"} size={25}/>} </RkText>
                </RkButton>
            </View>
            <View style={styles.buttons}>
                <RkButton style={styles.buttontop} rkType='icon circle'>
                <RkText rkType='moon large primary'> {<MaterialCommunityIcons name={"lock-reset"} size={25}/>} </RkText>
                </RkButton>
            </View>
        </View>
        </View>

        <View style={styles.slideCont}>
            <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            />
            <RkText>
            Value: {this.state.value}
            </RkText>
        </View>

        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Amenities</RkText>
          <View style={[UtilStyles.rowContainer]}>
            <View style={[UtilStyles.columnContainer, { flex: 1 }]}>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Furnished</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Studio</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Air Condiioned</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Utilities Included</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Laundry</RkText>
              </View>
            </View>
            <View style={[UtilStyles.columnContainer, { flex: 1 }]}>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Unfurnished</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Shared</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Security</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Parking Available</RkText>
              </View>
              <View style={styles.componentRow}>
                <RkChoice/>
                <RkText rkType='bold' style={styles.caption}>Pets Allowed</RkText>
              </View>
            </View>
          </View>
          </View>

          <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>{`Gender Preference - ${this.state.onChangeHandleText}`}</RkText>
          <View style={UtilStyles.columnContainer}>
            <RkChoiceGroup
              radio={true}
              selectedIndex={2}
              onChange={this.onOptionsGroupValueChanged}>
              <TouchableOpacity choiceTrigger={true}>
                <View style={[styles.radioRow, styles.spaceBottom]}>
                  <RkChoice rkType='radio' />
                  <RkText rkType='bold' style={{ marginLeft: 16.5 }}>All Girls</RkText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity choiceTrigger={true}>
                <View style={styles.radioRow}>
                  <RkChoice rkType='radio' />
                  <RkText rkType='bold' style={{ marginLeft: 16.5 }}>All Boys</RkText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity choiceTrigger={true}>
                <View style={styles.radioRow}>
                  <RkChoice rkType='radio' />
                  <RkText rkType='bold' style={{ marginLeft: 16.5 }}>Co-ed</RkText>
                </View>
              </TouchableOpacity>
            </RkChoiceGroup>
          </View>
        </View>

        <GradientButton rkType='large' style={styles.button} text='SEARCH' />

    </ScrollView>
  )
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25,
  },
  headerTop: {
    paddingTop: 25,
    paddingBottom: 17,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
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
  rowButtonTop: {
    flexDirection: 'row',

  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
  componentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  radioRow: {
    flexDirection: 'row',
    marginVertical: 11,
    alignItems: 'center',
  },
  caption: {
    marginLeft: 16,
    fontSize: 15,
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  buttons: {
    flex: 1,
  },
  buttontop: {
    marginTop: 2.5,
    alignSelf: 'center',
    // width: 30,
    // height: 30,
  },
  sliderCont: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
}));
