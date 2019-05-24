import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkSwitch,
  RkTheme,
  RkButton,
  RkTextInput,
} from 'react-native-ui-kitten';

import { SocialBar, SocialSetting } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';
import { FontAwesome } from '../../assets/icons';
import { ImageIcon } from '../../components/ImageIcon';
import { UtilStyles } from '../../assets/style/styles';
import { GradientButton } from '../../components/';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Toast, {DURATION} from 'react-native-easy-toast'



export class ListView extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Apartment Listing'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
    value: false,
  };

  
  onBasicSwitchValueChange = (value) => {
    this.setState({ value: value });
    this.props.navigation.navigate('CardView');
  };

  //Navigate To Card View
  onEventButtonPress = () => {
    this.props.navigation.navigate('CardView');
  };

  onButtonPress = () => {
    this.refs.toast.show('Added to Bookmarks!');
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

  extractItemKey = (item) => `${item.id}`;

  // onInputChanged = (event) => {
  //   const pattern = new RegExp(event.nativeEvent.text, 'i');
  //   const chats = _.filter(this.state.data.original, chat => {
  //     const filterResult = {
  //       firstName: chat.withUser.firstName.search(pattern),
  //       lastName: chat.withUser.lastName.search(pattern),
  //     };
  //     return filterResult.firstName !== -1 || filterResult.lastName !== -1 ? chat : undefined;
  //   });
  //   this.setState({
  //     data: {
  //       original: this.state.data.original,
  //       filtered: chats,
  //     },
  //   });
  // };

  renderInputLabel = () => (
    <RkText rkType='awesome'>{FontAwesome.search}</RkText>
  );

  renderHeader = () => (
    <View style={styles.searchContainer}>
      <RkTextInput
        autoCapitalize='none'
        autoCorrect={false}
        // onChange={this.onInputChanged}
        label={this.renderInputLabel()}
        rkType='row'
        placeholder='Search'
      />
    </View>
  );

  renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      >
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={item.photo} />
        <View rkCardContent>

        <RkButton rkType='clear'  onPress={() => this.props.navigation.navigate('ApartmentDetails', { id: item.id })} style={styles.floatinginvisible}>
          </RkButton>
          
          {/* <RkButton rkType='clear' style={styles.floatingclose} onPress={this.alertFunction}>
            <ImageIcon name='close' size={45}/>
          </RkButton> */}
          {/* <RkButton rkType='circle accent-bg danger' style={styles.floatingclose} onPress={this.onButtonPress}>
            <ImageIcon name='close' />
          </RkButton> */}
{/* 
          <RkButton style={styles.floatingclose} onPress={this.onButtonPress}>
          <MaterialCommunityIcons name='close' size={15}/>
          </RkButton> */}

          <RkText numberOfLines={1} rkType='header6'>{item.header}</RkText>
          <RkText rkType='secondary6 hintColor'>
            {`${item.user.firstName} ${item.user.lastName}`}
          </RkText>
          <RkText style={styles.post} numberOfLines={3} rkType='secondary2'>{item.text}</RkText>

          <RkButton rkType='circle accent-bg info' style={styles.floating} onPress={this.onButtonPress}>
            <ImageIcon name='plus' />
          </RkButton>


        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel />
        </View >
      </RkCard>
      </TouchableOpacity>
    </View>
  );

  render = () => (
      <View  style={UtilStyles.container}>
      <ScrollView
      contentContainerStyle={{flex: 1}}
      automaticallyAdjustContentInsets={true}
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
            icon= {<MaterialCommunityIcons name={"cards-outline"} size={35} color="white"/>}
            text=''
            onPress={this.onEventButtonPress}
          />

        {/* <RkButton rkType='circle accent-bg' style={styles.floatingMenuButtonStyle} onPress={this.onEventButtonPress}>
          <MaterialCommunityIcons name='cards-outline' size={35}  color="white"/>
        </RkButton> */}
      </View>
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
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  text: {
    marginVertical: 8,
  },
  post: {
    marginTop: 9,
  },
  componentRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },

  floating: {
    width: 43,
    height: 43,
    position: 'absolute',
    zIndex: 200,
    right: -21,
    top: 68,
  },
  floatingclose: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 450,
    right: -22,
    top: -3,
  },
  floatinginvisible: {
    width: 80,
    height: 80,
    position: 'absolute',
    zIndex: 450,
    right: 230,
    top: 15,
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

  // floating: {
  //   width: 56,
  //   height: 56,
  //   position: 'absolute',
  //   zIndex: 200,
  //   right: 16,
  //   top: 236,
  // },


  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center',
  },

  inputIcon: {
    fontSize: 15,
    color: '#0000003a',
    marginLeft: 4,
  },
  searchIcon: {
    marginLeft: 16,
  },
}));
