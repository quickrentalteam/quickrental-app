import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'Login',
    title: 'Login ',
    icon: FontIcons.login,
    screen: Screens.Login,
    children: [],
  },
  {
    id: 'SignUp',
    title: 'Sign Up',
    icon: FontIcons.login,
    screen: Screens.SignUp,
    children: [],
  },
  {
    id: 'password',
    title: 'Password Recovery',
    icon: FontIcons.login,
    screen: Screens.PasswordRecovery,
    children: [],
  },
  {
    id: 'Profile',
    title: 'User Profile',
    icon: FontIcons.theme,
    screen: Screens.UserProfile,
    children: [],
  },
  {
    id: 'ProfileSettings',
    title: 'Profile Settings',
    icon: FontIcons.theme,
    screen: Screens.ProfileSettings,
    children: [],
  },
  {
    id: 'Notifications',
    title: 'Notifications',
    icon: FontIcons.theme,
    screen: Screens.Notifications,
    children: [],
  },
  {
    id: 'Contacts',
    title: 'Contacts',
    icon: FontIcons.theme,
    screen: Screens.Contacts,
    children: [],
  },
  {
    id: 'Bookmarks',
    title: 'Bookmarks',
    icon: FontIcons.theme,
    screen: Screens.Bookmarks,
    children: [],
  },
  {
    id: 'CardView',
    title: 'Card View',
    icon: FontIcons.theme,
    screen: Screens.CardView,
    children: [],
  },
  {
    id: 'ListView',
    title: 'List View',
    icon: FontIcons.theme,
    screen: Screens.ListView,
    children: [],
  },
  {
    id: 'ApartmentDetails',
    title: 'Apartment Detail',
    icon: FontIcons.theme,
    screen: Screens.ApartmentDetails,
    children: [],
  },
  {
    id: 'Map',
    title: 'Map',
    icon: FontIcons.theme,
    screen: Screens.Map,
    children: [],
  },
  {
    id: 'Chat',
    title: 'Chat',
    icon: FontIcons.theme,
    screen: Screens.Chat,
    children: [],
  },
  {
    id: 'ChatList',
    title: 'Chat List',
    icon: FontIcons.theme,
    screen: Screens.ChatList,
    children: [],
  },
  {
    id: 'Comments',
    title: 'Comments',
    icon: FontIcons.theme,
    screen: Screens.Comments,
    children: [],
  },
  {
    id: 'WalkthroughMenu',
    title: 'Walkthroughs',
    icon: FontIcons.mobile,
    screen: Screens.WalkthroughMenu,
    children: [{
      id: 'Walkthrough',
      title: 'Walkthrough',
      screen: Screens.WalkthroughScreen,
      children: [],
    }],
  },
  {
    id: 'GridV2',
    title: 'Grid Menu V2',
    icon: FontIcons.theme,
    screen: Screens.GridV2,
    children: [],
  },
  {
    id: 'Side',
    title: 'Side Menu',
    icon: FontIcons.theme,
    screen: Screens.SideMenu,
    children: [],
  },
  {
    id: 'MapScreen',
    title: 'Map',
    icon: FontIcons.theme,
    screen: Screens.MapScreen,
    children: [],
  },
  {
    id: 'CRUDApartment',
    title: 'CRUD Apartment',
    icon: FontIcons.theme,
    screen: Screens.CRUDApartment,
    children: [],
  },
  {
    id: 'Filter',
    title: 'Filter',
    icon: FontIcons.theme,
    screen: Screens.Filter,
    children: [],
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: FontIcons.theme,
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
  // screen: Screens.Login,
  screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
