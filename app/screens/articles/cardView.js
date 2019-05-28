import React from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {
  RkCard,
  RkText, RkStyleSheet,
  RkButton,
  RkSwitch,
  RkTheme,
  RkTextInput,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components/avatar';
import { SocialBar, SocialSetting } from '../../components';
import { data } from '../../data';

import { ImageIcon } from '../../components/ImageIcon';
import Toast, {DURATION} from 'react-native-easy-toast'
import { FontAwesome } from '../../assets/icons';

// import { RkSwitch } from './switch/index';
import PropTypes from 'prop-types';
import NavigationType from '../../config/navigation/propTypes';
import { GradientButton } from '../../components/';
import { UtilStyles } from '../../assets/style/styles';

import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const moment = require('moment');

export class CardView extends React.Component {

  // static propTypes = {
  //   selected: PropTypes.bool,
  //   tintColor: PropTypes.string,
  // };
  // static defaultProps = {
  //   selected: true,
  //   tintColor: RkTheme.current.colors.accent,
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: this.props.selected,
  //   };
  // }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  static navigationOptions = {
    title: 'Apartment Listing'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
    // value: false,
    tintColor: RkTheme.current.colors.accent,
  };

  onButtonPress = () => {
    this.refs.toast.show('Added to Bookmarks!');
  };

  onButtonPress1 = () => {
    this.refs.toast.show('hmmmm :D!');
  };

  onSearchPress = () => {
    this.props.navigation.navigate('Filter');
  };

  alertFunction = () => {
    Alert.alert(
      'Are you sure you want to delete this listing?', undefined,
      [
        {text: 'Yes', onPress: this.onNavigateButtonPress},
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        
      ],
      {cancelable: false},
      );
  }


  // onBasicSwitchValueChange = (val) => {
  //   this.setState({ value: val });
  //   this.props.navigation.navigate('Articles4');
  // };

  // onSwitchValueChanged = (value) => {
  //   this.setState({ selected: value });
  // };

  extractItemKey = (item) => `${item.id}`;

  renderInputLabel = () => (
    <RkText rkType='awesome'>{FontAwesome.search}</RkText>
  );

  renderHeader = () => (
    <View style={styles.searchContainer}>
     <GradientButton
        style={styles.save}
        rkType='large'
        icon={<Ionicons name={"ios-search"} size={35} color="white"/> }
        text=' Advanced Search'
        onPress={this.onSearchPress}
      />
    </View>
  );

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('ApartmentDetails', { id: item.id })}>
    <RkCard style={styles.card}>

    <RkButton rkType='clear' style={styles.floatingclose} onPress={this.alertFunction}>
      <ImageIcon name='close' size={45}/>
    </RkButton>

      <View rkCardHeader>
        <Avatar
          rkType='small'
          style={styles.avatar}
          img={item.user.photo}
        />
        <View>

          <RkText rkType='header4'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>

        </View>
      </View>


      <View>
          <Image rkCardImg source={item.photo} /> 
          <View rkCardImgOverlay={true} />
      </View>

      <RkButton rkType='circle accent-bg info' style={styles.floating} onPress={this.onButtonPress}>
        <ImageIcon name='plus' />
      </RkButton>

      <View rkCardHeader style={styles.content}>
          <RkText style={styles.section} rkType='header4'>{item.title}</RkText>
      </View>

      <View rkCardContent>
        <RkText rkType='primary3'>{item.text}</RkText>
      </View>
      <View rkCardFooter>
        <SocialBar />
      </View >
    </RkCard>
    </TouchableOpacity>

    // </View>
  );

  render = () => (

    <View style={UtilStyles.container}>
      <ScrollView
      contentContainerStyle={{flex: 1}}
      automaticallyAdjustContentInsets={true}
      // style={UtilStyles.container}
      >
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={this.extractItemKey}
        style={styles.container}
      />

      <View style={styles.mainContainerStyle}>
        <GradientButton
          style={styles.floatingMenuButtonStyle}
          rkType='circle accent-bg'
          icon= {<MaterialCommunityIcons name={"view-list"} size={35} color="white"/>}
          text=''
          onPress={() => this.props.navigation.navigate('ListView')}
        />

        {/* <RkButton rkType='circle accent-bg' style={styles.floatingMenuButtonStyle} onPress={() => this.props.navigation.navigate('ListView')}>
          <MaterialCommunityIcons name='view-list' size={35}  color="white"/>
        </RkButton> */}
      </View>

    </ScrollView>
    <Toast 
      ref="toast"
      position='bottom'
      opacity={0.8}
    />
  </View>
    
    
  );
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  avatar: {
    marginRight: 16,
  },
  floating: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 200,
    right: 16,
    top: 236,
  },
  text: {
    marginVertical: 8,
  },
  componentRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainContainerStyle: {
    flexDirection: 'column',
    flex: 1
  },

  floatingMenuButtonStyle: {
    width: 56,
    height: 56,
    zIndex: 200,
    right: 10,
    // top: 236,

    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 17,
  },

  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 13,
    paddingVertical: 10,
    height: 80,
    alignItems: 'center',
  },

  floatingclose: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 450,
    right: 1,
    top: -3,
  },
}));
