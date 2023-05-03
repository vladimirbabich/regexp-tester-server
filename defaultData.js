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
      modes: '2',
    },
    {
      text: 'abcDefGJHzxFgsFdsw',
      task: 'get first UPPERCASE letter',
      expectedResult: 'D',
      possibleAnswer: '[A-Z]',
      difficulty: 1,
      functionName: 'match',
      modes: '1,3',
    },
    {
      text: 'abcDefGJHzxFgsFdsw',
      task: 'get all UPPERCASE letters',
      expectedResult: 'D|G|J|H|F|F',
      possibleAnswer: '[A-Z]/g',
      difficulty: 1,
      functionName: 'match',
      modes: '2,3',
    },
    {
      text: 'abcDeFLsw',
      task: 'get all LOWERCASE letters',
      expectedResult: 'a|b|c|e|s|w',
      possibleAnswer: '[a-z]/g',
      difficulty: 1,
      functionName: 'match',
      modes: '2',
    },
    {
      text: 'Lorem 1234 @$#! ipSuM',
      task: 'get all letters',
      expectedResult: 'L|o|r|e|m|i|p|S|u|M',
      possibleAnswer: '[a-z]/gi',
      difficulty: 2,
      functionName: 'match',
      modes: '1,2,3',
    },
    {
      text: '+1(555)234-56-78',
      task: 'get all digits',
      expectedResult: '1|5|5|5|2|3|4|5|6|7|8',
      possibleAnswer: '[0-9]/g',
      difficulty: 1,
      functionName: 'match',
      modes: '1',
    },
  ],
  test: [
    {
      userId: 1,
      modeName: 'all',
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
      modeName: 'flags',
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
      userId: 1,
      modeName: 'flags',
      timeSpent: '6222',
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
      modeName: 'flags',
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
    {
      userId: 2,
      modeName: 'flags',
      timeSpent: '22122',
      testQuestions: [
        {
          questionId: 4,
          difficulty: 5,
          userAnswer: '[a-z]',
        },
        {
          questionId: 5,
          difficulty: 3,
          // userAnswer: '[A-Z]/gi',
        },
        {
          questionId: 6,
          difficulty: 5,
          userAnswer: '[0-9]',
        },
      ],
    },
    {
      userId: 2,
      modeName: 'flags',
      timeSpent: '100',
      testQuestions: [
        {
          questionId: 4,
          difficulty: 1,
          userAnswer: '[a-z]',
        },
        {
          questionId: 5,
          difficulty: 1,
          userAnswer: '[A-Z]/gi',
        },
        {
          questionId: 6,
          difficulty: 2,
          // userAnswer: '[0-9]',
        },
      ],
    },
    {
      userId: 3,
      modeName: 'flags',
      timeSpent: '100',
      testQuestions: [
        {
          questionId: 4,
          difficulty: 1,
          userAnswer: '[a-z2]',
        },
        {
          questionId: 5,
          difficulty: 1,
          userAnswer: '[A-Z2]/gi',
        },
      ],
    },
  ],
};

module.exports = data;
