const { questionsData } = require('./questionsData');
const shortLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(questionsData.length)
const data = {
  // user: [
  //   {
  //     nickname: 'John',
  //     email: 'John@gmail.com',
  //     pass: '123123',
  //   },
  //   {
  //     nickname: 'Frank',
  //     email: 'Frank@gmail.com',
  //     pass: 'adsaASFAFasada',
  //   },
  //   {
  //     nickname: 'Anna',
  //     email: 'Anna@gmail.com',
  //     pass: '12adASd#@$231233',
  //   },
  //   {
  //     nickname: 'Фома Киняев',
  //     email: 'Ingrid@gmail.com',
  //     pass: '$2jgoeo22jkf@iILloO0ыфвы',
  //   },
  // ],
  // mode: [
  //   { mode: 'minutes-5', timeType: 'time' },
  //   { mode: 'all-questions', timeType: 'timeless' },
  //   { mode: 'only-flags', timeType: 'time' },
  // ],
  question: questionsData,
  // test: [
  //   {
  //     userId: 1,
  //     modeName: 'all-questions',
  //     timeSpent: '2222',
  //     testQuestions: [
  //       {
  //         questionId: 1,
  //         difficulty: 2,
  //         userAnswer: '[a-z]',
  //       },
  //       {
  //         questionId: 2,
  //         difficulty: 2,
  //         userAnswer: '[A-Z]/gi',
  //       },
  //       {
  //         questionId: 3,
  //         difficulty: 2,
  //         userAnswer: '[0-9]',
  //       },
  //     ],
  //   },
  //   {
  //     userId: 1,
  //     modeName: 'only-flags',
  //     timeSpent: '2222',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 7,
  //         userAnswer: '[a-z]',
  //       },
  //       {
  //         questionId: 5,
  //         difficulty: 6,
  //         userAnswer: 'ipsum',
  //       },
  //       {
  //         questionId: 6,
  //         difficulty: 10,
  //         userAnswer: '[a-z]',
  //       },
  //     ],
  //   },
  //   {
  //     userId: 1,
  //     modeName: 'only-flags',
  //     timeSpent: '6222',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 7,
  //         userAnswer: '[a-z]',
  //       },
  //       {
  //         questionId: 5,
  //         difficulty: 6,
  //         userAnswer: 'ipsum',
  //       },
  //       {
  //         questionId: 6,
  //         difficulty: 10,
  //         userAnswer: '[a-z]',
  //       },
  //     ],
  //   },
  //   {
  //     userId: 2,
  //     modeName: 'only-flags',
  //     timeSpent: '100',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 2,
  //         userAnswer: '[a-z]',
  //       },
  //       // {
  //       //   questionId: 5,
  //       //   difficulty: 2,
  //       //   // userAnswer: '[A-Z]/gi',
  //       // },
  //       // {
  //       //   questionId: 6,
  //       //   difficulty: 2,
  //       //   // userAnswer: '[0-9]',
  //       // },
  //     ],
  //   },
  //   {
  //     userId: 2,
  //     modeName: 'only-flags',
  //     timeSpent: '22122',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 5,
  //         userAnswer: '[a-z]',
  //       },
  //       // {
  //       //   questionId: 5,
  //       //   difficulty: 3,
  //       //   // userAnswer: '[A-Z]/gi',
  //       // },
  //       {
  //         questionId: 6,
  //         difficulty: 5,
  //         userAnswer: '[0-9]',
  //       },
  //     ],
  //   },
  //   {
  //     userId: 2,
  //     modeName: 'only-flags',
  //     timeSpent: '100',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 1,
  //         userAnswer: '[a-z]',
  //       },
  //       {
  //         questionId: 5,
  //         difficulty: 1,
  //         userAnswer: '[A-Z]/gi',
  //       },
  //       {
  //         questionId: 6,
  //         difficulty: 2,
  //         // userAnswer: '[0-9]',
  //       },
  //     ],
  //   },
  //   {
  //     userId: 3,
  //     modeName: 'only-flags',
  //     timeSpent: '100',
  //     testQuestions: [
  //       {
  //         questionId: 4,
  //         difficulty: 1,
  //         userAnswer: '[a-z2]',
  //       },
  //       {
  //         questionId: 5,
  //         difficulty: 1,
  //         userAnswer: '[A-Z2]/gi',
  //       },
  //     ],
  //   },
  // ],
};

module.exports = data;
// r7 g17 = 24
