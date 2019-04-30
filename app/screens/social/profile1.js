import React from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  RkText,
  RkButton, RkStyleSheet,
  RkCard,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components/avatar';
import { Gallery } from '../../components/gallery';
import { Listings } from '../../components/listings';
import { data } from '../../data/';
import formatNumber from '../../utils/textUtils';
import NavigationType from '../../config/navigation/propTypes';
import { scaleVertical } from '../../utils/scale';

import { SocialBar } from '../../components';

const moment = require('moment');

export class ProfileV1 extends React.Component {

  // state = {
  //   data: undefined,
  // };
  
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data: undefined,
    // data: data.getArticles(),
  };

  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Article', { id: item.id });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <RkCard rkType='imgBlock' style={styles.card}>
        <Image rkCardImg source={item.photo} />
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header4 inverseColor'>{item.header}</RkText>
          <RkText
            style={styles.time}
            rkType='secondary2 inverseColor'>{moment().add(item.time, 'seconds').fromNow()}
          </RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel />
        </View >
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <ScrollView style={styles.root}>
      <View style={[styles.header, styles.bordered]}>
        <Avatar img={this.state.data.photo} rkType='big' />
        <RkText rkType='header2'>{`${this.state.data.firstName} ${this.state.data.lastName}`}</RkText>
      </View>
      <View style={[styles.userInfo, styles.bordered]}>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.postCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Listings</RkText>
        </View>
        {/* <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{formatNumber(this.state.data.followersCount)}</RkText>
          <RkText rkType='secondary1 hintColor'>Followers</RkText>
        </View>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.followingCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Following</RkText>
        </View> */}
      </View>
      <View style={styles.buttons}>
        <RkButton style={styles.button} rkType='clear link'>CALL</RkButton>
        <View style={styles.separator} />
        <RkButton style={styles.button} rkType='clear link'>MESSAGE</RkButton>
      </View>

      <FlatList
        data={this.state.data = data.getArticles()}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        style={styles.container}
      />
      {/* <Listings items={this.state.data.images} /> */}

      <View style={styles.footer}>
      <RkButton style={styles.button} rkType='circle highlight'>
        <Image source={require('../../assets/icons/iconPlus.png')} />
      </RkButton>
    </View>
      
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  footer: {
    marginTop: 8,
    marginBottom: scaleVertical(16),
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  time: {
    marginTop: 5,
  },
}));
