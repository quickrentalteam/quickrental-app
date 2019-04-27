import React from 'react';

import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import {
  Avatar,
  SocialBar,
} from '../../components';
import NavigationType from '../../config/navigation/propTypes';

import { Gallery } from '../../components/gallery';

const moment = require('moment');

export class Article extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Apartment Details'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const articleId = this.props.navigation.getParam('id', 1);
    this.data = data.getArticle(articleId);

    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  state = {
    data: undefined,
  };

  onAvatarPressed = () => {
    this.props.navigation.navigate('ProfileV1', { id: this.data.user.id });
  };

  render = () => (
    <ScrollView style={styles.root}>
      <RkCard rkType='article'>
        <Image rkCardImg source={this.data.photo} />
        <View rkCardHeader>
          <View>
            <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
            <RkText rkType='secondary2 hintColor'>
              {moment().add(this.data.time, 'seconds').fromNow()}
            </RkText>
          </View>
          <TouchableOpacity onPress={this.onAvatarPressed}>
            <Avatar rkType='circle' img={this.data.user.photo} />
          </TouchableOpacity>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
          </View>
        </View>
        <View rkCardFooter>
          <SocialBar />
        </View>
      </RkCard>

      <Gallery items={this.state.data.images} />
    </ScrollView>
  )
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  title: {
    marginBottom: 5,
  },
}));
