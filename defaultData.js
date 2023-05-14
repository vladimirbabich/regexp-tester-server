const shortLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

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
    { mode: 'minutes-5', timeType: 'time' },
    { mode: 'all-questions', timeType: 'timeless' },
    { mode: 'only-flags', timeType: 'time' },
  ],
  question: [
    {
      text: shortLorem,
      task: 'Get the word "ipsum"',
      expectedResult: 'ipsum',
      possibleAnswer: 'ipsum',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'abcDeFG',
      task: 'Get the first UPPERCASE letter',
      expectedResult: 'D',
      possibleAnswer: '[A-Z]',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'abcDeFGhIjKlmNo',
      task: 'get only UPPERCASE letters',
      expectedResult: 'D|F|G|I|K|N',
      possibleAnswer: '[A-Z]/g',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'abcDeFLsw',
      task: 'get only lowercase letters',
      expectedResult: 'a|b|c|e|s|w',
      possibleAnswer: '[a-z]/g',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'Lorem 1234 @$#! ipSuM',
      task: 'Get only letters',
      expectedResult: 'L|o|r|e|m|i|p|S|u|M',
      possibleAnswer: '[a-z]/gi',
      difficulty: 2,
      functionName: 'get',
      modes: '1,2,3',
    },
    {
      text: '+1(555)234-56-78',
      task: 'Get only digits',
      expectedResult: '1|5|5|5|2|3|4|5|6|7|8',
      possibleAnswer: '[0-9]/g',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: '1,22,333,4444,55555,666666',
      task: 'Get numbers',
      expectedResult: '1|22|333|4444|55555|666666',
      // prettier-ignore
      possibleAnswer: '\d+',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: '10 -2 1234 -13 -2222 999',
      expectedResult: '-2|-13|-2222',
      task: 'Get only negative numbers',
      // prettier-ignore
      possibleAnswer: '-\d*/g',
      difficulty: 3,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'Uppercase, lowercase! Again. Uppercase, not-uppercase',
      expectedResult: 'Uppercase|Again|Uppercase',
      task: 'Get only words beginning with an Uppercase letter',
      // prettier-ignore
      possibleAnswer: '[A-Z][\w]+/g',
      difficulty: 3,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `10
-2
1234
-13
-2222
0
999`,
      expectedResult: '10|1234|999',
      task: 'Get only positive numbers',
      possibleAnswer: '^[1-9]+[0-9]*/mg',
      difficulty: 4,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: '213.12 123,5 32.23 33 12 1 0',
      expectedResult: '213.12|123,5|32.23',
      task: 'Get only positive float numbers',
      // prettier-ignore
      possibleAnswer: '\d+[.,]\d+',
      difficulty: 3,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: 'U+2192, U*NITE, InvalidUnicode, U+25B6, U+2794, U-222C, U+279C, U+279D, U-TWO2',
      expectedResult: 'U+2192|U+25B6|U+2794|U+279C|U+279D',
      task: 'Get all unicode symbols',
      possibleAnswer: 'U[+][A-Z0-9]{4}/gi',
      difficulty: 5,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
  <body>
    <section>
      <p>Paragraph 1</p>
    </section>
    <section>
      <p>Paragraph 2</p>
    </section>
    <section>
      <p>Paragraph 3</p>
    </section>
  </body>
</html>`,
      expectedResult: 'set of p`s',
      task: "Get all tags 'p' with their text inside",
      // prettier-ignore
      possibleAnswer: '<p>(.*)<\/p>/gm',
      difficulty: 6,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `{
  "circleG": {"radius":5,"size":2,"color":"green","fill":false},
  "circleR": {"radius":15,"size":8,"color":"red","fill":true},
  "circleB": {"radius":2,"size":1,"color":"blue","fill":false},
  "circleP": {"radius":7,"size":7,"color":"purple","fill":false}
}`,
      expectedResult: '"radius":5|"radius":15|"radius":2|"radius":7',
      task: 'Get all "radius" keys and their values',
      // prettier-ignore
      possibleAnswer: '"radius":\d+/gm',
      difficulty: 6,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `label, table, Anabel, Bell, Izabel`,
      expectedResult: 'label|Anabel|Izabel',
      task: 'Get all words with "el" at the end',
      // prettier-ignore
      possibleAnswer: '\w*el\b/g',
      difficulty: 4,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `row 1,   
      ro   w 2!`,
      expectedResult: 'r|o|w|1|,|r|o|w|2|!',
      task: 'get all symbols accept space and line ending',
      // prettier-ignore
      possibleAnswer: '\S/gm',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: '213.12 123,5 32.23 33 12 1 0',
      expectedResult: '33|12|1|0',
      task: 'Get only integer numbers',
      possibleAnswer: 'd*[.,]d*/g',
      difficulty: 4,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: `first line
  second line
  third line
  line fourth
  fifth line`,
      expectedResult: `first line
  second line
  third line
  line fourth
  fifth`,
      task: `Remove the last word "line"`,
      possibleAnswer: 'line$/g',
      difficulty: 4,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: `first line
  second line
  third line
  line fourth
  fifth line`,
      expectedResult: `first 
  second 
  third 
  line fourth
  fifth `,
      task: `Remove the last word on each row if it is a "line"`,
      possibleAnswer: 'line$/gm',
      difficulty: 5,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: 'level 1st qwerty word1 word2 urban l33tspeak babel eiffel best666',
      expectedResult:
        'level 1st qwerty sum variable urban l33tsp34k eiffel tower best',
      task: 'Remove all digits AT THE END of each word',
      // prettier-ignore
      possibleAnswer: '\d*\b/gm',
      difficulty: 4,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: `first 
  second 
  third 
  fourth`,
      expectedResult: 'first second third fourth',
      task: 'Remove all line endings',
      // prettier-ignore
      possibleAnswer: '\n/gm',
      difficulty: 2,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: `row 1,   
  ro   w 2!`,
      expectedResult: 'row1,row2!',
      task: 'Remove all spaces and line endings',
      // prettier-ignore
      possibleAnswer: '\s/g',
      difficulty: 1,
      id: 23,
      functionName: 'remove',
      modes: '1,2',
    },
    {
      text: `row 1,   
      ro   w 2!`,
      expectedResult: 'r|o|w|1|,|r|o|w|2|!',
      task: 'Get all symbols accept space and line ending',
      // prettier-ignore
      possibleAnswer: '\S/g',
      difficulty: 1,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `Mom, auTo, mooshroom, Apple, aPple, apPle, appLe, applE, CNN`,
      expectedResult: 'Mom|Apple|aPple|apPle|appLe|applE|CNN',
      task: 'Get all words, that has 1 Uppercase letter in any place of the word',
      possibleAnswer:
        '(?>[A-Z{1}][a-z]+|[a-z]+[A-Z{1}][a-z{*}]+|[a-z]+[A-Z]|[A-Z]+)(?! )/g',
      difficulty: 9,
      id: 24,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `5tr0NgPa55W0rD`,
      expectedResult: 't|r|N|g|P|a|W|r|D',
      task: 'Get all letters',
      possibleAnswer: '[a-z]/gi',
      difficulty: 1,
      functionName: 'get',
      modes: '3',
    },
    {
      text: shortLorem,
      task: 'Get all words',
      expectedResult:
        'Lorem|ipsum|dolor|sit|amet|consectetur|adipiscing|elit|sed|do|eiusmod|tempor|incididunt|ut|labore|et|dolore|magna|aliqua',
      // prettier-ignore
      possibleAnswer: '\w+/g',
      difficulty: 2,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `Hello\nworld`,
      task: 'Get all words',
      expectedResult: `hello
world`,
      possibleAnswer: 'Hello.world/s',
      difficulty: 2,
      functionName: 'get',
      modes: '3',
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      task: 'Get both words "Lorem" that start the lines',
      expectedResult: `Lorem|Lorem`,
      possibleAnswer: '^Lorem/gm',
      difficulty: 3,
      functionName: 'get',
      modes: '1,2,3',
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua(WRONG). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      task: 'Get both words "aliqua" that end the lines',
      expectedResult: `aliqua|aliqua`,
      possibleAnswer: 'aliqua$/gm',
      difficulty: 3,
      functionName: 'get',
      modes: '1,2,3',
    },
    {
      text: `[question]
{choice}
(animal)
{fact}
error
{milk}`,
      task: 'Get all lines starting and ending with a {curly braces}',
      expectedResult: `{choice}|{fact}|{milk}`,
      // prettier-ignore
      possibleAnswer: '\{\w*\}$/gm',
      difficulty: 6,
      functionName: 'get',
      modes: '1,2',
    },
    {
      text: `[question]
{choice}
(animal)
{fact}
error
{milk}
{and this one}`,
      task: 'Get all lines starting and ending with a {curly braces}',
      expectedResult: `{choice}|{fact}|{milk}|{and this one}`,
      // prettier-ignore
      possibleAnswer: '\{.+?\}$/gm',
      difficulty: 7,
      functionName: 'get',
      modes: '1,2',
    },
  ],
  test: [
    {
      userId: 1,
      modeName: 'all-questions',
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
      modeName: 'only-flags',
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
      modeName: 'only-flags',
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
      modeName: 'only-flags',
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
      modeName: 'only-flags',
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
      modeName: 'only-flags',
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
      modeName: 'only-flags',
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
// r7 g17 = 24
