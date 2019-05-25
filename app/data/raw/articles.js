const articles = [{
  id: 1,
  photo: require('../img/loc.png'),
  type: 'article',
  time: -300,
  header: 'Kappan Apartment',
  text: 'Price: $3200\n' +
  'Location: Rapsey Street\n' +
  'Walking Distance: 0.5km\n',

  // text: 'Price: $1500' + 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  comments: [{
    id: 1,
    text: 'Great place!',
    time: 0,
  }, {
    id: 2,
    text: 'Nice but not worth the money.',
    time: -311,
  }, {
    id: 3,
    text: 'Nosy landlord.',
    time: -622,
  }, {
    id: 4,
    text: 'Great amenities.',
    time: -933,
  },],
}, {
  id: 2,
  photo: require('../img/photo2.png'),
  type: 'article',
  time: -1373,
  header: 'Streatham Lodge Apartments',
  text: 'Price: $1500\n' +
  'Location: Streatham Lodge Road\n' +
  'Walking Distance: 2km\n',
  comments: [{
    id: 1,
    text: 'Not bad!',
    time: 0,
  },],
}, {
  id: 3,
  photo: require('../img/photo3.png'),
  type: 'article',
  time: -2446,
  header: 'TLC Apartments',
  text: 'Price: $2800\n' +
  'Location: St Augustine Circular\n' +
  'Walking Distance: 0.1km\n',
  comments: [{
    id: 1,
    text: 'No oven D:',
    time: -933,
  },],
}, {
  id: 4,
  photo: require('../img/photo4.png'),
  type: 'article',
  time: -3519,
  header: 'Tony\'s Court',
  text: 'Price: $1800\n' +
  'Location: Sankar Street\n' +
  'Walking Distance: 1km\n',
  comments: [{
    id: 1,
    text: 'Dirty Kitchen :(',
    time: -933,
  },],
}, {
  id: 2,
  photo: require('../img/photo5.png'),
  type: 'article',
  time: -4592,
  header: 'Campus Court',
  text: 'Price: $1500\n' +
  'Location: St Augustine Circular\n' +
  'Walking Distance: 0.7km\n',
  comments: [{
    id: 1,
    text: 'Kinda prison-y :/',
    time: -100,
  },{
    id: 2,
    text: 'Nosy landlord',
    time: -200,
  },],
}, {
  id: 3,
  photo: require('../img/photo6.png'),
  type: 'article',
  time: -5665,
  header: 'Curepe Student Villa',
  text: 'Price: $1500\n' +
  'Location: Eastern Main Road\n' +
  'Walking Distance: 4km\n' +
  'Additional Notes: Car Recommended\n',
  comments: [{
    id: 1,
    text: 'Car REQUIRED -_-',
    time: -100,
  },{
    id: 2,
    text: 'Quite far but cheap.\nBest to travek with a red van to campus.',
    time: -100,
  },],
}, {
  id: 3,
  photo: require('../img/img1.jpg'),
  type: 'post',
  time: -3000000,
  title: 'Kappan Apartments',
  text: 'Fully-furnished\n' +
  'Studio\n' +
  'Air-Conditioned\n',
  comments: [{
    id: 1,
    text: 'Great place!',
    time: 0,
  }, {
    id: 2,
    text: 'Nice but not worth the money.',
    time: -311,
  }, {
    id: 3,
    text: 'Nosy landlord.',
    time: -622,
  }, {
    id: 4,
    text: 'Great amenities.',
    time: -933,
  },],
}, {
  id: 1,
  photo: require('../img/img2.jpg'),
  type: 'post',
  time: -1373000,
  header: 'Streatham Lodge',
  text: 'Price: $1500\n' +
  'Location: Streatham Lodge Road\n' +
  'Walking Distance: 2km\n' +
  'Additional Notes: Shared Kitchen',
  comments: [{
    id: 1,
    text: 's****y kitchen!',
    time: 0,
  },],
}, {
  id: 1,
  photo: require('../img/photo19.png'),
  type: 'post',
  time: -2446,
  header: 'TLC Apartments',
  text: 'Price: $2800\n' +
  'Location: St Augustine Circular\n' +
  'Walking Distance: 0.1km\n',
  comments: [{
    id: 1,
    text: 'No oven D:',
    time: -933,
  },],
}, {
  id: 4,
  photo: require('../img/photo20.png'),
  type: 'post',
  time: -3519,
  header: 'Streatham Lodge Apartments',
  text: 'Price: $1500\n' +
  'Location: Streatham Lodge Road\n' +
  'Walking Distance: 2km\n',
  comments: [{
    id: 1,
    text: 'Not bad!',
    time: 0,
  },],
},
];

export default articles;
