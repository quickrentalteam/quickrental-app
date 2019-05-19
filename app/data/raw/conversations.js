import {db, dbCollection} from '../../../db/database'

const Conversations = [
  {
    withUserId: 4,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hello, good day Sir',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Hello Ms. Sewdhan',
      },
      {
        id: 2,
        time: -230,
        type: 'out',
        text: 'I am interested in your apartment on Streatham Lodge',
      },
      {
        id: 3,
        time: -100,
        type: 'out',
        text: "Is it still available? Is the rent negotiable?",
      },
      {
        id: 4,
        time: -45,
        type: 'in',
        text: 'Yes it is, and sorry no the rent is firm. I am just the caretaker, otherwise I would be happy to negotiate.',
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: "That's okay :) Are you available to meet?",
      }],
  },
  {
    withUserId: 3,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'This is a test. =3',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'That is a great test! Thank you :)',
      },
      {
        id: 2,
        time: -100,
        type: 'out',
        text: 'You are very welcome c:',
      },
      {
        id: 3,
        time: -45,
        type: 'out',
        text: 'More testing',
      },],
  },
  {
    withUserId: 2,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hey what\'s up?',
      }],
  },
];

// dbCollection.collection('quickrental').doc("conversations").set(JSON.stringify(Conversations));

export default Conversations;
