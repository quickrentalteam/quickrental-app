import React from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  RkCard,
  RkText, RkStyleSheet,
  RkButton,
  RkSwitch,
  RkTheme,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components/avatar';
import { SocialBar, SocialSetting } from '../../components';
import { data } from '../../data';

import { ImageIcon } from '../../components/ImageIcon';
import Toast, {DURATION} from 'react-native-easy-toast'
import { FontAwesome } from '@expo/vector-icons';

// import { RkSwitch } from './switch/index';
import PropTypes from 'prop-types';

import { UtilStyles } from '../../assets/style/styles';

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

  static navigationOptions = {
    title: 'Apartment Listing'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
    value: false,
    tintColor: RkTheme.current.colors.accent,
  };

  onButtonPress = () => {
    this.refs.toast.show('Added to Bookmarks!');
  };

  onButtonPress1 = () => {
    this.refs.toast.show('hmmmm :D!');
  };

  onBasicSwitchValueChange = (value) => {
    this.setState({ value: value });
    this.props.navigation.navigate('Articles4');
  };

  // onSwitchValueChanged = (value) => {
  //   this.setState({ selected: value });
  // };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item, index }) => (

    // <View>
    //   <View style={[UtilStyles.columnContainer, UtilStyles.bordered]}>
    //         <View style={styles.componentRow}>
    //           <RkText>List View</RkText>
    //           <RkSwitch
    //             value={this.state.value}
    //             onValueChange={this.onBasicSwitchValueChange}
    //           />
    //         </View>
    //       </View>
    
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('Article', { id: item.id })}>
    <RkCard style={styles.card}>

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

      <RkButton rkType='circle accent-bg' style={styles.floating} onPress={this.onButtonPress}>
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

    <View style={UtilStyles.container}>>
      <ScrollView
      automaticallyAdjustContentInsets={true}
      // style={UtilStyles.container}
      >

          <View style={styles.row}>
            <SocialSetting name='List View' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google} onPress={() => this.props.navigation.navigate('Articles4')}></SocialSetting>/>
        </View>
        {/* <View style={[UtilStyles.columnContainer, UtilStyles.bordered]}>
              <View style={styles.componentRow}>
                <RkText style={styles.text}>List View</RkText>
                <RkSwitch
                  tintColor='orange'
                  value={this.state.value}
                  onValueChange={this.onBasicSwitchValueChange}
                />
              </View>
            </View> */}

            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={this.extractItemKey}
              style={styles.container}
            />

    </ScrollView>
    <Toast 
      ref="toast"
      position='bottom'
      // positionValue={width}
      // fadeInDuration={750}
      // fadeOutDuration={1000}
      opacity={0.8}
      // textStyle={{color:'red'}}
    />
  </View>
    
    
  );
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 10,
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
}));
