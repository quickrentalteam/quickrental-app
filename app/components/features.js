import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkChoice,
} from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { UtilStyles } from '../assets/style/styles';


export class Features extends React.Component {



  render = () => (

    <View style={styles.containerAmenities}>
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
                <RkText rkType='bold' style={styles.caption}>Air Conditoned</RkText>
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
    </View>
  );

}
  
const styles = RkStyleSheet.create(theme => ({
  containerAmenities: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
    paddingTop: 10,
  },
  componentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  caption: {
    marginLeft: 16,
    fontSize: 15,
    margin: 10,
  }
}));
