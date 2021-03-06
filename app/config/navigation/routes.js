// import _ from 'lodash';
// import { FontIcons } from '../../assets/icons';
// import * as Screens from '../../screens/index';

// export const MainRoutes = [
//   {
//     id: 'LoginMenu',
//     title: 'Auth',
//     icon: FontIcons.login,
//     screen: Screens.LoginMenu,
//     children: [
//       {
//         id: 'Login',
//         title: 'Login ',
//         screen: Screens.Login,
//         children: [],
//       },
//       {
//         id: 'SignUp',
//         title: 'Sign Up',
//         screen: Screens.SignUp,
//         children: [],
//       },
//       {
//         id: 'password',
//         title: 'Password Recovery',
//         screen: Screens.PasswordRecovery,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'SocialMenu',
//     title: 'Social',
//     icon: FontIcons.profile,
//     screen: Screens.SocialMenu,
//     children: [
//       {
//         id: 'Profile',
//         title: 'User Profile',
//         screen: Screens.UserProfile,
//         children: [],
//       },
//       {
//         id: 'ProfileSettings',
//         title: 'Profile Settings',
//         screen: Screens.ProfileSettings,
//         children: [],
//       },
//       {
//         id: 'Notifications',
//         title: 'Notifications',
//         screen: Screens.Notifications,
//         children: [],
//       },
//       {
//         id: 'Contacts',
//         title: 'Contacts',
//         screen: Screens.Contacts,
//         children: [],
//       },
//       {
//         id: 'Bookmarks',
//         title: 'Bookmarks',
//         screen: Screens.Bookmarks,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'ArticlesMenu',
//     title: 'Apartments',
//     icon: FontIcons.article,
//     screen: Screens.ArticleMenu,
//     children: [
//       {
//         id: 'CardView',
//         title: 'Card View',
//         screen: Screens.CardView,
//         children: [],
//       },
//       {
//         id: 'ListView',
//         title: 'List View',
//         screen: Screens.ListView,
//         children: [],
//       },
//       {
//         id: 'ApartmentDetails',
//         title: 'Apartment Detail',
//         screen: Screens.ApartmentDetails,
//         children: [],
//       },
//       {
//         id: 'Map',
//         title: 'Map',
//         screen: Screens.Map,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'MessagingMenu',
//     title: 'Messaging',
//     icon: FontIcons.mail,
//     screen: Screens.MessagingMenu,
//     children: [
//       {
//         id: 'Chat',
//         title: 'Chat',
//         screen: Screens.Chat,
//         children: [],
//       },
//       {
//         id: 'ChatList',
//         title: 'Chat List',
//         screen: Screens.ChatList,
//         children: [],
//       },
//       {
//         id: 'Comments',
//         title: 'Comments',
//         screen: Screens.Comments,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'WalkthroughMenu',
//     title: 'Walkthroughs',
//     icon: FontIcons.mobile,
//     screen: Screens.WalkthroughMenu,
//     children: [{
//       id: 'Walkthrough',
//       title: 'Walkthrough',
//       screen: Screens.WalkthroughScreen,
//       children: [],
//     }],
//   },
//   {
//     id: 'NavigationMenu',
//     icon: FontIcons.navigation,
//     title: 'Navigation',
//     screen: Screens.NavigationMenu,
//     children: [
//       {
//         id: 'GridV2',
//         title: 'Grid Menu V2',
//         screen: Screens.GridV2,
//         children: [],
//       },
//       {
//         id: 'Side',
//         title: 'Side Menu',
//         action: 'DrawerOpen',
//         screen: Screens.SideMenu,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'OtherMenu',
//     title: 'Other',
//     icon: FontIcons.other,
//     screen: Screens.OtherMenu,
//     children: [
//       {
//         id: 'Settings',
//         title: 'Settings',
//         screen: Screens.Settings,
//         children: [],
//       },
//       {
//         id: 'Filter',
//         title: 'Filter',
//         screen: Screens.Filter,
//         children: [],
//       },
//       {
//         id: 'CRUDApartment',
//         title: 'CRUD Apartment',
//         screen: Screens.CRUDApartment,
//         children: [],
//       },
//       {
//         id: 'MapScreen',
//         title: 'Map',
//         screen: Screens.MapScreen,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'Themes',
//     title: 'Themes',
//     icon: FontIcons.theme,
//     screen: Screens.Themes,
//     children: [],
//   },
// ];

// const menuRoutes = _.cloneDeep(MainRoutes);
// menuRoutes.unshift({
//   id: 'GridV2',
//   title: 'Start',
//   // screen: Screens.Login,
//   screen: Screens.GridV2,
//   children: [],
// });

// export const MenuRoutes = menuRoutes;

import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'CardView',
    title: 'Home',
    icon: FontIcons.theme,
    screen: Screens.CardView,
    children: [],
  },
  {
    id: 'Profile',
    title: 'Profile',
    icon: FontIcons.theme,
    screen: Screens.UserProfile,
    children: [],
  },
  {
    id: 'ProfileSettings',
    title: 'Edit Profile',
    icon: FontIcons.theme,
    screen: Screens.ProfileSettings,
    children: [],
  },
  {
    id: 'Filter',
    title: 'Search',
    icon: FontIcons.theme,
    screen: Screens.Filter,
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
    id: 'Notifications',
    title: 'Notifications',
    icon: FontIcons.theme,
    screen: Screens.Notifications,
    children: [],
  },
  {
    id: 'ChatList',
    title: 'Chat',
    icon: FontIcons.theme,
    screen: Screens.ChatList,
    children: [],
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: FontIcons.theme,
    screen: Screens.Settings,
    children: [],
  },




  // {
  //   id: 'Login',
  //   title: 'Login ',
  //   icon: FontIcons.login,
  //   screen: Screens.Login,
  //   children: [],
  // },
  // {
  //   id: 'SignUp',
  //   title: 'Sign Up',
  //   icon: FontIcons.login,
  //   screen: Screens.SignUp,
  //   children: [],
  // },
  // {
  //   id: 'password',
  //   title: 'Password Recovery',
  //   icon: FontIcons.login,
  //   screen: Screens.PasswordRecovery,
  //   children: [],
  // },
  // {
  //   id: 'Contacts',
  //   title: 'Contacts',
  //   icon: FontIcons.theme,
  //   screen: Screens.Contacts,
  //   children: [],
  // },
  // {
  //   id: 'ListView',
  //   title: 'List View',
  //   icon: FontIcons.theme,
  //   screen: Screens.ListView,
  //   children: [],
  // },
  // {
  //   id: 'ApartmentDetails',
  //   title: 'Apartment Detail',
  //   icon: FontIcons.theme,
  //   screen: Screens.ApartmentDetails,
  //   children: [],
  // },
  // {
  //   id: 'Map',
  //   title: 'Map',
  //   icon: FontIcons.theme,
  //   screen: Screens.Map,
  //   children: [],
  // },
  // {
  //   id: 'Chat',
  //   title: 'Chat',
  //   icon: FontIcons.theme,
  //   screen: Screens.Chat,
  //   children: [],
  // },
  // {
  //   id: 'Comments',
  //   title: 'Comments',
  //   icon: FontIcons.theme,
  //   screen: Screens.Comments,
  //   children: [],
  // },
  // {
  //   id: 'WalkthroughMenu',
  //   title: 'Walkthroughs',
  //   icon: FontIcons.mobile,
  //   screen: Screens.WalkthroughMenu,
  //   children: [{
  //     id: 'Walkthrough',
  //     title: 'Walkthrough',
  //     screen: Screens.WalkthroughScreen,
  //     children: [],
  //   }],
  // },
  // {
  //   id: 'GridV2',
  //   title: 'Grid Menu V2',
  //   icon: FontIcons.theme,
  //   screen: Screens.GridV2,
  //   children: [],
  // },
  // {
  //   id: 'Side',
  //   title: 'Side Menu',
  //   icon: FontIcons.theme,
  //   screen: Screens.SideMenu,
  //   children: [],
  // },
  // {
  //   id: 'MapScreen',
  //   title: 'Map',
  //   icon: FontIcons.theme,
  //   screen: Screens.MapScreen,
  //   children: [],
  // },
  // {
  //   id: 'CRUDApartment',
  //   title: 'CRUD Apartment',
  //   icon: FontIcons.theme,
  //   screen: Screens.CRUDApartment,
  //   children: [],
  // },
  // {
  //   id: 'Themes',
  //   title: 'Themes',
  //   icon: FontIcons.theme,
  //   screen: Screens.Themes,
  //   children: [],
  // },
];

export const OtherRoutes = [
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
    id: 'ProfileSettings',
    title: 'Profile Settings',
    icon: FontIcons.theme,
    screen: Screens.ProfileSettings,
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
    id: 'Themes',
    title: 'Themes',
    icon: FontIcons.theme,
    screen: Screens.Themes,
    children: [],
  },
];

const otherRoutes = _.cloneDeep(OtherRoutes);
const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'Login',
  title: 'Start',
  screen: Screens.Login,
  // screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
export const moreRoutes = otherRoutes;
