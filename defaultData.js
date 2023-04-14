const data = {
  user: [
    {
      nickname: 'John',
      email: 'John@gmail.com',
      pass: '123',
    },
    {
      nickname: 'Frank',
      email: 'Frank@gmail.com',
      pass: 'adsaASFAFasada',
    },
    {
      nickname: 'Anna',
      email: 'Anna@gmail.com',
      pass: '12adASd#@$231233',
    },
    {
      nickname: 'Фома Киняев',
      email: 'Ingrid@gmail.com',
      pass: '$2jgoeo22jkf@iILloO0ыфвы',
    },
  ],
  mode: [
    { mode: 'min5', timeType: 'time' },
    { mode: 'all', timeType: 'timeless' },
    { mode: 'flags', timeType: 'time' },
  ],
  question: [
    {
      text: 'Lorem ipsum ipsum dolor sit amet, consectetur adipiscing elit',
      task: 'get a word "ipsum"',
      expectedResult: 'ipsum',
      possibleAnswer: 'ipsum',
      difficulty: 1,
      functionName: 'match',
    },
    {
      text: 'abcDefGJHzxFgsFdsw',
      task: 'D',
      expectedResult: 'get first UPPERCASE letter',
      possibleAnswer: '[A-Z]',
      difficulty: 1,
      functionName: 'match',
    },
    {
      text: 'abcDefGJHzxFgsFdsw',
      task: 'get all UPPERCASE letters',
      expectedResult: 'D|G|J|H|F|F',
      possibleAnswer: '[A-Z]/g',
      difficulty: 1,
      functionName: 'match',
    },
    {
      text: 'abcDeFLsw',
      task: 'get all LOWERCASE letters',
      expectedResult: 'a|b|c|e|s|w',
      possibleAnswer: '[a-z]/g',
      difficulty: 1,
      functionName: 'match',
    },
    {
      text: 'Lorem 1234 @$#! ipSuM',
      task: 'get all letters',
      expectedResult: 'L|o|r|e|m|i|p|S|u|M',
      possibleAnswer: '[a-z]/gi',
      difficulty: 2,
      functionName: 'match',
    },
    {
      text: '+1(555)234-56-78',
      task: 'get all digits',
      expectedResult: '1|5|5|5|2|3|4|5|6|7|8',
      possibleAnswer: '[0-9]/g',
      difficulty: 1,
      functionName: 'match',
    },
  ],
  test: [
    {
      userId: 1,
      modeId: 1,
      timeSpent: '2222',
      testQuestions: [
        {
          questionId: 1,
          difficulty: 2,
          userAnswer: '[a-z]',
        },
        {
          questionId: 2,
          difficulty: 2,
          userAnswer: '[A-Z]/gi',
        },
        {
          questionId: 3,
          difficulty: 2,
          userAnswer: '[0-9]',
        },
      ],
    },
    {
      userId: 1,
      modeId: 2,
      timeSpent: '2222',
      testQuestions: [
        {
          questionId: 4,
          difficulty: 7,
          userAnswer: '[a-z]',
        },
        {
          questionId: 5,
          difficulty: 6,
          userAnswer: 'ipsum',
        },
        {
          questionId: 6,
          difficulty: 10,
          userAnswer: '[a-z]',
        },
      ],
    },
    {
      userId: 2,
      modeId: 2,
      timeSpent: '2222',
      testQuestions: [
        {
          questionId: 4,
          difficulty: 2,
          userAnswer: '[a-z]',
        },
        {
          questionId: 5,
          difficulty: 2,
          // userAnswer: '[A-Z]/gi',
        },
        {
          questionId: 6,
          difficulty: 2,
          // userAnswer: '[0-9]',
        },
      ],
    },
  ],
};

module.exports = data;
