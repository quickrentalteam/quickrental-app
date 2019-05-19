// import * as fb from '../../../db/services'
import {db, dbCollection} from '../../../db/database'

// const articles = [{
//   id: 1,
//   photo: require('../img/loc.png'),
//   type: 'article',
//   time: -300,
//   header: 'Kappan Apartment',
//   text: 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
//   comments: [{
//     id: 1,
//     text: 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
//     time: 0,
//   }, {
//     id: 2,
//     text: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
//     time: -311,
//   }, {
//     id: 3,
//     text: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
//     time: -622,
//   }, {
//     id: 4,
//     text: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
//     time: -933,
//   },],
// }, {
//   id: 2,
//   photo: require('../img/photo2.png'),
//   type: 'article',
//   time: -1373,
//   header: 'Streatham Lodge Apartments',
//   text: 'Aliquam sit amet diam in magna bibendum imperdiet.' +
//   'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. ' +
//   'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.' ,
//   comments: [],
// }, {
//   id: 3,
//   photo: require('../img/photo3.png'),
//   type: 'article',
//   time: -2446,
//   header: 'Sea World',
//   text: 'The worlds oceans cover two thirds of our planet. As we take a dive from the rocks or paddle out from the beach, we are entering a place which is teeming with marine life. ' +
//   'From fish to crabs to octopuses or even sea creatures that have not yet been discovered, the oceans and its coastlines are an amazing and interesting foray of water wildlife.',
//   comments: [],
// }, {
//   id: 4,
//   photo: require('../img/photo4.png'),
//   type: 'article',
//   time: -3519,
//   header: 'Flowers',
//   text: 'Flowers did not always exist; they first appeared 140 million years ago. Before that, ferns and cone bearing trees dominated the earth. ' +
//   'Several centuries ago in Holland, tulips were more valuable than gold. ' +
//   'Broccoli is actually a flower. Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.',
//   comments: [],
// }, {
//   id: 2,
//   photo: require('../img/photo5.png'),
//   type: 'article',
//   time: -4592,
//   header: 'Birds Of Our Planet',
//   text: 'Birds have feathers, wings, lay eggs and are warm blooded. There are around 10000 different species of birds worldwide. ' +
//   'The Ostrich is the largest bird in the world. It also lays the largest eggs and has the fastest maximum running speed (97 kph). ' +
//   'Scientists believe that birds evolved from theropod dinosaurs. Birds have hollow bones which help them fly. ' +
//   'Some bird species are intelligent enough to create and use tools.',
//   comments: [],
// }, {
//   id: 3,
//   photo: require('../img/photo6.png'),
//   type: 'article',
//   time: -5665,
//   header: 'Mountains',
//   text: 'Mountains make up about one-fifth of the world\'s landscape, and provide homes to at least one-tenth of the world\'s people. ' +
//   'The tallest known mountain in the solar system is Olympus Mons, located on Mars. ' +
//   'There are mountains under the surface of the sea! ' +
//   'Mountains occur more often in oceans than on land; some islands are the peaks of mountains coming out of the water.',
//   comments: [],
// }, {
//   id: 1,
//   photo: require('../img/photo45.png'),
//   type: 'fact',
//   time: -5665,
//   header: 'Smile and Frown',
//   text: 'It takes 17 muscles to smile and 43 to frown.',
//   comments: [],
// }, {
//   id: 4,
//   photo: require('../img/photo46.png'),
//   type: 'fact',
//   time: -8373,
//   header: 'Interesting Fact',
//   text: 'Dolphins sleep with one eye open.',
//   comments: [],
// }, {
//   id: 2,
//   photo: require('../img/photo47.png'),
//   type: 'fact',
//   time: -565,
//   header: 'Elephant',
//   text: 'Elephant is one of the few mammals that can\'t jump.',
//   comments: [],
// }, {
//   id: 4,
//   photo: require('../img/photo48.png'),
//   type: 'fact',
//   time: -52365,
//   header: 'Cold Water',
//   text: 'Cold water weighs less than hot water.',
//   comments: [],
// }, {
//   id: 2,
//   photo: require('../img/photo49.png'),
//   type: 'fact',
//   time: -1295,
//   header: 'Our Eyes',
//   text: 'You blink over 10,000,000 times a year.',
//   comments: [],
// }, {
//   id: 3,
//   photo: require('../img/img1.jpg'),
//   type: 'post',
//   time: -3000000,
//   title: 'Kappan Apartments',
//   text: 'Fully-furnished\n' +
//   'Studio\n' +
//   'Air-Conditioned\n',
//   comments: [{
//     id: 1,
//     text: 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
//     time: 0,
//   }, {
//     id: 2,
//     text: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
//     time: -311,
//   }, {
//     id: 3,
//     text: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
//     time: -622,
//   }, {
//     id: 4,
//     text: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
//     time: -933,
//   },],
// }, {
//   id: 1,
//   photo: require('../img/img2.jpg'),
//   type: 'post',
//   time: -1373000,
//   header: 'Streatham Lodge',
//   text: 'Shared bathroom...',
//   comments: [{
//     id: 1,
//     text: 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
//     time: 0,
//   }, {
//     id: 2,
//     text: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
//     time: -311,
//   }, {
//     id: 3,
//     text: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
//     time: -622,
//   }, {
//     id: 4,
//     text: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
//     time: -933,
//   },],
// }, {
//   id: 1,
//   photo: require('../img/photo19.png'),
//   type: 'post',
//   time: -2446,
//   header: 'Music In Our Life',
//   text: 'The scientists say that they can define your character if they know what music you like.',
//   comments: [],
// }, {
//   id: 4,
//   photo: require('../img/photo20.png'),
//   type: 'post',
//   time: -3519,
//   header: 'Lorem Ipsum',
//   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam est. Vivamus lectus ex, aliquet non suscipit sed, lobortis.',
//   comments: [],
// },
// ];

var articles = [];

let setApartments = (apartments) => {
  apartments.forEach(function(child) {
    articles.push(child);
    console.log("THIS IS DATA");
    console.log(child);
  })
};


db.ref('apartments').child('-LfAkD45BeTLYHjIHPIh').on('value', function(snapshot) {
  setApartments(snapshot.val());
  });

console.log(articles);


export default articles;
