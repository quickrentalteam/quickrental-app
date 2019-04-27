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
} from 'react-native-ui-kitten';
import { SocialBar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';

import { UtilStyles } from '../../assets/style/styles';


export class Articles4 extends React.Component {
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
    // <View>
      <ScrollView
    automaticallyAdjustContentInsets={true}
    style={UtilStyles.container}>

      <View style={[UtilStyles.columnContainer, UtilStyles.bordered]}>
            <View style={styles.componentRow}>
              <RkText style={styles.text}>Card View</RkText>
              <RkSwitch
                tintColor='orange'
                value={this.state.value}
                onValueChange={this.onBasicSwitchValueChange}
              />
            </View>
          </View>

      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        style={styles.container}
      />
      </ScrollView>
    // </View>
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
