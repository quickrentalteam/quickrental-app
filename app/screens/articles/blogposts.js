import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard, RkStyleSheet,
  RkText,
  RkButton,
  Icon,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';
// import { FontAwesome } from '../../assets/icons';
import { ImageIcon } from '../../components/ImageIcon';

import { FontAwesome } from '@expo/vector-icons';


const moment = require('moment');

export class Blogposts extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Featured Apartments'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Article', { id: item.id });
  };

  // <View style={styles.userInfo}>
  //           <Avatar style={styles.avatar} rkType='circle small' img={item.user.photo} />
  //           <RkText rkType='header6'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
  //           <RkText rkType='awesome primary'>{FontAwesome.heart}</RkText>
  //           {/* <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText> */}
  //       </View>
  //       <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>


      {/* <RkCard rkType='shadowed'>
            <View>
              <Image rkCardImg source={item.photo} /> 
              <View rkCardImgOverlay={true} />
            </View>
            <RkButton rkType='circle accent-bg' style={styles.floating}>
            <FontAwesome style={styles.floating} name="plus" />
              <ImageIcon name='plus' />
            </RkButton>
            <View rkCardHeader={true} style={{ paddingBottom: 2.5 }}>
              <View>
                <RkText rkType='header xxlarge'>Header</RkText>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <View rkCardContent={true}>
              <RkText rkType='compactCardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true}>
              <View style={styles.footerButtons}>
                <RkButton rkType='clear action' style={{ marginRight: 16 }}>SHARE</RkButton>
                <RkButton rkType='clear action'>EXPLORE</RkButton>
              </View>
            </View>
          </RkCard> */}


      <RkCard rkType='blog' style={styles.card}>



      <View rkCardHeader={true}>
              <View style={{ flexDirection: 'row' }}>
                <Avatar style={styles.avatar} rkType='circle small' img={item.user.photo} />
                <View style={{}}>
                  <RkText rkType='header6'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
                  <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
                </View>

                {/* <View style={{ flexDirection: 'column' }}>
                  <RkText rkType='awesome primary'>{FontAwesome.heart}</RkText>
                </View> */}
              </View>
              <RkButton rkType='clear'>
                <FontAwesome style={styles.dot} name="circle" />
                <FontAwesome style={styles.dot} name="circle" />
                <FontAwesome style={styles.dot} name="circle" />
              </RkButton>
            </View>

            <View>
              <Image rkCardImg source={item.photo} /> 
              <View rkCardImgOverlay={true} />
            </View>
            <RkButton rkType='circle accent-bg' style={styles.floating}>
            <FontAwesome style={styles.floating} name="heart" />
              <ImageIcon name='plus' />
            </RkButton>

            <View rkCardHeader style={styles.content}>
          <RkText style={styles.section} rkType='header4'>{item.title}</RkText>
        </View>

        <View rkCardContent>
          <View>
            <RkText rkType='primary3 mediumLine' numberOfLines={2}>{item.text}</RkText>
          </View>
        </View>

        <View rkCardFooter>
          <View style={styles.userInfo}>
            <RkText rkType='header6'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          </View>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
        </View>




        {/* <View rkCardHeader style={styles.content}>
          <RkText style={styles.section} rkType='header4'>{item.title}</RkText>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType='primary3 mediumLine' numberOfLines={2}>{item.text}</RkText>
          </View>
        </View>
        <View rkCardFooter>
          <View style={styles.userInfo}>
            <Avatar style={styles.avatar} rkType='circle small' img={item.user.photo} />
            <RkText rkType='header6'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          </View>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
        </View> */}
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={styles.container}
    />
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
  userInfo: {
    paddingTop: 16,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 17,
  },
  dot: {
    fontSize: 6.5,
    color: '#0000008e',
    marginLeft: 2.5,
    marginVertical: 10,
  },
  floating: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 200,
    right: 16,
    top: 173,
  },
  // icon: {
  //   paddingHorizontal: 68,
  // }
}));
