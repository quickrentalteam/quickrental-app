import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import { FontAwesome } from '../../assets/icons';
import { Ionicons, Feather, EvilIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Screens from '../../screens/index';

import React from 'react';

export const MainRoutes = [
  {
    id: 'SocialMenu',
    title: 'Profile',
    icon: FontIcons.profile,
    screen: Screens.UserProfile,
    children: [],
  },
  {
    id: 'ArticlesMenu',
    title: 'Home',
    icon: <Feather name="home" size={20}/>,
    // icon: FontIcons.article,
    screen: Screens.CardView,
    children: [],
  },
  {
    id: 'Filter',
    title: 'Search',
    icon: <EvilIcons name="search" size={25}/>,
    screen: Screens.Filter,
    children: [],
  },
  {
    id: 'Bookmarks',
    title: 'Bookmarks',
    icon: <Feather name="bookmark" size={25}/>,
    screen: Screens.Bookmarks,
    children: [],
  },
  {
    id: 'Notifications',
    title: 'Notifications',
    icon: <Ionicons name="ios-notifications" size={25}/>,
    screen: Screens.Notifications,
    children: [],
  },
  {
    id: 'MessagingMenu',
    title: 'Chat',
    icon: FontIcons.mail,
    screen: Screens.ChatList,
    children: [],
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: FontIcons.other,
    screen: Screens.Settings,
    children: [],
  },
  {
    id: 'Themes',
    title: 'Themes',
    icon: FontIcons.theme,
    screen: Screens.Themes,
    children: [],
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
