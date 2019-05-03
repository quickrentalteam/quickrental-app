import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkSwitch,
  RkTheme,
  RkButton,
} from 'react-native-ui-kitten';

import { SocialBar, SocialSetting } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';

import { FontAwesome } from '../../assets/icons';

import { UtilStyles } from '../../assets/style/styles';
// import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// const IoniconsHeaderButton = passMeFurther => (
//   // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
//   // and it is important to pass those props to `HeaderButton`
//   // then you may add some information like icon size or color (if you use icons)
//   <HeaderButton {...passMeFurther} {<MaterialCommunityIcons name={"lock-reset"} size={25}/>}  IconComponent={Ionicons} iconSize={23} color="blue" />
// );

export class Articles4 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Apartment Listing'.toUpperCase(),

    // headerRight: (
    //   <HeaderButtons>
    //     <Item title="search" onPress={() => alert('search')} />
    //     <Item title="select" onPress={() => alert('select')} />
    //   </HeaderButtons>
    // ),

    // headerRight: (
    //   <RkButton
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#fff"
    //   />,
    //   <RkText onPress={() => alert('This is a button!')}> {<MaterialCommunityIcons name={"lock-reset"} size={25}/>} </RkText>
    // ),

    // headerRight: <RkText> {<MaterialCommunityIcons name={"lock-reset"} size={25}/>} </RkText>,
    // headerLeft: <RkText>hmm</RkText>,
  };

  state = {
    data: data.getArticles(),
    value: false,
  };

  
  onBasicSwitchValueChange = (value) => {
    this.setState({ value: value });
    this.props.navigation.navigate('CardView');
  };

  //Navigate To Maps
  onEventButtonPress = () => {
    this.props.navigation.navigate('CardView');
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('Article', { id: item.id })}>
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={item.photo} />
        <View rkCardContent>
          <RkText numberOfLines={1} rkType='header6'>{item.header}</RkText>
          <RkText rkType='secondary6 hintColor'>
            {`${item.user.firstName} ${item.user.lastName}`}
          </RkText>
          <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{item.text}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel />
        </View >
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
      <ScrollView
      automaticallyAdjustContentInsets={true}
      style={UtilStyles.container}>

      <View>
          <SocialSetting name='Card View' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google}  onPress={this.onEventButtonPress}/> 
      </View>

      {/* <View style={[UtilStyles.columnContainer, UtilStyles.bordered]}>
            <View style={styles.componentRow}>
              <RkText style={styles.text}>Card View</RkText>
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
    marginTop: 13,
  },
  componentRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
