import {db, dbCollection} from '../../../db/database'

const images = [
  require('../img/Image10.png'),
  require('../img/Image11.png'),
  require('../img/Image2.png'),
  require('../img/Image3.png'),
  require('../img/Image4.png'),
  require('../img/Image1.png'),
  require('../img/Image12.png'),
  require('../img/Image8.png'),
  require('../img/Image6.png'),
  require('../img/Image9.png'),
  require('../img/Image5.png'),
  require('../img/Image7.png'),
];

const users = [{
  id: 1,
  firstName: 'Gabriela',
  lastName: 'Sewdhan',
  phone: '1 (868) 123 4567',
  country: 'Trinidad and Tobago',
  email: 'gabiems13@gmail.com',
  password: '123456',
  newPassword: '12345678',
  confirmPassword: '12345678',
  photo: require('../img/avatars/Image1.png'),
  postCount: 86,
  followersCount: 22102,
  followingCount: 536,
  images,

},
{
  id: 2,
  firstName: 'Kady',
  lastName: 'Seecharan',
  email: 'test@mail.com',
  country: 'Trinidad and Tobago',
  password: 'YyKgJ8A3b4b',
  newPassword: 'DpCRPYW7Fgy',
  confirmPassword: 'DpCRPYW7Fgy',
  postCount: 95,
  phone: '1 (868) 123 4567',
  followingCount: 975,
  followersCount: 1703,
  images,
  photo: require('../img/avatars/Image2.png'),
},
{
  id: 3,
  firstName: 'Michael',
  lastName: 'Ali',
  email: 'test@mail.com',
  country: 'Trinidad and Tobago',
  password: 'ZlzECwoN',
  newPassword: 'N9l5KLpBW',
  confirmPassword: 'N9l5KLpBW',
  postCount: 37,
  phone: '1 (868) 123 4567',
  followingCount: 745,
  followersCount: 2703,
  images,
  photo: require('../img/avatars/Image3.png'),
},
{
  id: 4,
  firstName: 'Ishmael',
  lastName: 'Mohammed',
  phone: '1 (868) 123 4567',
  country: 'Trinidad and Tobago',
  email: 'test@mail.com',
  password: '123456',
  newPassword: '12345678',
  confirmPassword: '12345678',
  photo: require('../img/avatars/Image4.png'),
  postCount: 86,
  followersCount: 22102,
  followingCount: 536,
  images,

},];


// dbCollection.collection('quickrental').doc("users").set(JSON.stringify(users));

export default users;
