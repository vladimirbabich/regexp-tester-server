const questionsData = [
  {
    text: 'first second third fourth',
    task: 'Remove all line endings',
    expectedResult: 'first second third fourth',
    possibleAnswer: '\\n/gm',
    difficulty: 2,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: 'Mom, auTo, mooshroom, Apple, aPple, apPle, appLe, applE, CNN',
    task: 'Get all words, that has 1 Uppercase letter in any place of the word',
    expectedResult: 'Mom|Apple|aPple|apPle|appLe|applE|CNN',
    possibleAnswer:
      '(?>[A-Z{1}][a-z]+|[a-z]+[A-Z{1}][a-z{*}]+|[a-z]+[A-Z]|[A-Z]+)(?! )/g',
    difficulty: 10,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'level 1st qwerty word1 word2 urban l33tspeak babel eiffel best666',
    task: 'Remove all digits AT THE END of each word',
    expectedResult:
      'level 1st qwerty sum variable urban l33tsp34k eiffel tower best',
    possibleAnswer: '\\d*\\b/gm',
    difficulty: 4,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: '5tr0NgPa55W0rD',
    task: 'Get all letters',
    expectedResult: 't|r|N|g|P|a|W|r|D',
    possibleAnswer: '[a-z]/gi',
    difficulty: 1,
    functionName: 'get',
    modes: 3,
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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    task: 'Get the word "ipsum"',
    expectedResult: 'ipsum',
    possibleAnswer: 'ipsum',
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
    modes: '1,2',
  },
  {
    text: '\\+1(555)234-56-78',
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
    possibleAnswer: '\\d+',
    difficulty: 1,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '10 -2 1234 -13 -2222 999',
    task: 'Get only negative numbers',
    expectedResult: '-2|-13|-2222',
    possibleAnswer: '-\\d*/g',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'Uppercase, lowercase! Again. Uppercase, not-uppercase',
    task: 'Get only words beginning with an Uppercase letter',
    expectedResult: 'Uppercase|Again|Uppercase',
    possibleAnswer: '[A-Z][\\w]+/g',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '10\r\n-2\r\n1234\r\n-13\r\n-2222\r\n0\r\n999',
    task: 'Get only positive numbers',
    expectedResult: '10|1234|999',
    possibleAnswer: '^[1-9]+[0-9]*/mg',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'U+2192, U*NITE, InvalidUnicode, U+25B6, U+2794, U-222C, U+279C, U+279D, U-TWO2',
    task: 'Get all unicode symbols',
    expectedResult: 'U+2192|U+25B6|U+2794|U+279C|U+279D',
    possibleAnswer: 'U[+][A-Z0-9]{4}/gi',
    difficulty: 5,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '213.12 123,5 32.23 33 12 1 0',
    task: 'Get only positive float numbers',
    expectedResult: '213.12|123,5|32.23',
    possibleAnswer: '\\d+[.,]\\d+',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'label, table, Anabel, Bell, Izabel',
    task: 'Get all words with "el" at the end',
    expectedResult: 'label|Anabel|Izabel',
    possibleAnswer: '\\w*el\\b/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'row 1,   \r\n      ro   w 2!',
    task: 'get all symbols accept space and line ending',
    expectedResult: 'r|o|w|1|,|r|o|w|2|!',
    possibleAnswer: '\\S/gm',
    difficulty: 1,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '213.12 123,5 32.23 33 12 1 0',
    task: 'Get only integer numbers',
    expectedResult: '33|12|1|0',
    possibleAnswer: 'd*[.,]d*/g',
    difficulty: 4,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: 'first line\r\nsecond line\r\nthird line\r\nline fourth\r\nfifth line',
    task: 'Remove the last word "line"',
    expectedResult:
      'first line\r\nsecond line\r\nthird line\r\nline fourth\r\nfifth',
    possibleAnswer: 'line$/g',
    difficulty: 4,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: 'first line\r\nsecond line\r\nthird line\r\nline fourth\r\nfifth line',
    task: 'Remove the last word on each row if it is a "line"',
    expectedResult:
      'first line\r\nsecond line\r\nthird line\r\nline fourth\r\nfifth ',
    possibleAnswer: 'line$/gm',
    difficulty: 5,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: 'row 1,   \r\n      ro   w 2!',
    task: 'Remove all spaces and line endings',
    expectedResult: 'row1,row2!',
    possibleAnswer: '\\s/g',
    difficulty: 1,
    functionName: 'remove',
    modes: '1,2',
  },
  {
    text: 'row 1,   \r\n      ro   w 2!',
    task: 'Get all symbols accept space and line ending',
    expectedResult: 'r|o|w|1|,|r|o|w|2|!',
    possibleAnswer: '\\S/g',
    difficulty: 1,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    task: 'Get all words',
    expectedResult:
      'Lorem|ipsum|dolor|sit|amet|consectetur|adipiscing|elit|sed|do|eiusmod|tempor|incididunt|ut|labore|et|dolore|magna|aliqua',
    possibleAnswer: '\\w+/g',
    difficulty: 2,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'Hello\\nworld',
    task: 'Get all words',
    expectedResult: 'hello\r\nworld',
    possibleAnswer: 'Hello.world/s',
    difficulty: 2,
    functionName: 'get',
    modes: 3,
  },
  {
    text: '[question] {choice} (animal) {fact} error {milk}',
    task: 'Get all words that start and end with a {curly braces}',
    expectedResult: '{choice}|{fact}|{milk}',
    possibleAnswer: '\\{\\w*\\}$/gm',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '[question] {choice} (animal) {fact} error {milk} {and this one}',
    task: 'Get all lines that start and end with a {curly braces}',
    expectedResult: '{choice}|{fact}|{milk}|{and this one}',
    possibleAnswer: '\\{.+?\\}$/gm',
    difficulty: 7,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <title>Document</title>\n    </head>\n  <body>\n    <section>\n      <p>Paragraph 1</p>\n    </section>\n    <section>\n      <p>Paragraph 2</p>\n    </section>\n    <section>\n      <p>Paragraph 3</p>\n    </section>\n  </body>\n</html>',
    task: "Get all tags 'p' with their text inside",
    expectedResult: '<p>Paragraph 1</p>|<p>Paragraph 2</p>|<p>Paragraph 3</p>',
    possibleAnswer: '<p>(.*)<\\/p>/gm',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '{\n  "circleG": {"radius":5,"size":2,"color":"green","fill":false},\n  "circleR": {"radius":15,"size":8,"color":"red","fill":true},\n  "circleB": {"radius":2,"size":1,"color":"blue","fill":false},\n  "circleP": {"radius":7,"size":7,"color":"purple","fill":false}\n}',
    task: 'Get all "radius" keys and their values',
    expectedResult: '"radius":5|"radius":15|"radius":2|"radius":7',
    possibleAnswer: '"radius":\\d+/gm',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    task: 'Get both words "Lorem" that start the lines',
    expectedResult: 'Lorem|Lorem',
    possibleAnswer: '^Lorem/gm',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua(WRONG). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    task: 'Get both words "aliqua" that end the lines',
    expectedResult: 'aliqua|aliqua',
    possibleAnswer: 'aliqua$/gm',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'name name1 name999 name!@# names',
    task: 'Get all the words "name" and numbers after them(if they exists)',
    expectedResult: 'name|name1|name999|name|name',
    possibleAnswer: 'name\\d*/g',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'word name1 safe999 idea!@# words',
    task: 'Get all words that end with numbers',
    expectedResult: 'name1|safe999',
    possibleAnswer: '[a-z]+\\d+/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'word name1 safe999 idea!@# words',
    task: 'Get all words that end with one digit or none',
    expectedResult: 'word|name1|safe9|idea|words',
    possibleAnswer: '[a-z]+\\d?/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'word1 word2 word3 word10 word25 word999 word102 word word12345',
    task: 'Get all words with 2 digits at the end',
    expectedResult: 'word10|word25|word99|word10|word12',
    possibleAnswer: 'word\\d{2}/g',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'word1 word2 word3 word10 word25 word999 word102 word word12345',
    task: 'Get all words with 2 or more digits at the end',
    expectedResult: 'word10|word25|word999|word102|word12345',
    possibleAnswer: 'word\\d{2,}/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'word\nword1\nword22\nword333\nword4444\nword55555',
    task: 'Get all words with 2-4 digits at the end',
    expectedResult: 'word22|word333|word4444',
    possibleAnswer: 'word\\d{2,4}$/gm',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'million action horizon motion station emotion fashion',
    task: 'Get all words with that end with "tion"',
    expectedResult: 'action|motion|station|emotion',
    possibleAnswer: '[a-z]+(tion)/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'million action horizon motion station emotion fashion',
    task: 'Get all words with that end with "zon" or "lion"',
    expectedResult: 'million|horizon',
    possibleAnswer: '[a-z]+(lion|zon)/g',
    difficulty: 5,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'million fact project\nmillion project fact\nproject million fact',
    task: 'Get a line that start with "million" and ends with "fact"',
    expectedResult: 'million project fact',
    possibleAnswer: '^million.*fact$/gm',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '1r2i3g4h5t6 A7N8S9W0ER!',
    task: 'Get all symbols accept digits',
    expectedResult: 'r|i|g|h|t| |A|N|S|W|E|R|!',
    possibleAnswer: '\\D/g',
    difficulty: 1,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '$140 &200 €15 %24 $20',
    task: 'Get all numbers starting with a dollar sign',
    expectedResult: '$140|$20',
    possibleAnswer: '\\$\\d+/g',
    difficulty: 3,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'https://www.example.com\nhttp://www.rightlink.com\nwww.google.com\nretester.xyz\nftp://wronklink.org',
    task: 'Get all links',
    expectedResult:
      'https://www.example.com|http://www.rightlink.com|www.google.com|retester.xyz',
    possibleAnswer: '^(?:https?:\\/\\/)?(www\\.)?\\w+\\.com$/gm',
    difficulty: 7,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'film golf head deck scarf bandage feedback',
    task: 'Get words containing only letters [a-m], but not containing any letters [n-z]',
    expectedResult: 'film|head|deck|feedback',
    possibleAnswer: '\\b[a-m]+\\b/g',
    difficulty: 5,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'emotion motion motional promotion',
    task: 'Get a word "motion"',
    expectedResult: 'motion',
    possibleAnswer: '^motion\\b/m',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '€250 $1000 £432 ₿1 ¥1234 $212 €38',
    task: 'Get dollar values without "$"',
    expectedResult: '1000|212',
    possibleAnswer: '(?<=\\$)\\d+/g',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'file.txt image.png video.mp4 image.jpg secondimage.png anim.gif text.js imagename.png',
    task: 'Get png filenames without ".png"',
    expectedResult: 'image|secondimage|imagename',
    possibleAnswer: '\\w+(?=\\.png)/g',
    difficulty: 6,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'file.txt image.png bmp.bmp video.mp4 image.jpg secondimage.png anim.gif text.js imagename.png',
    task: 'Get image filenames without format ".???"',
    expectedResult: 'image|bmp/image|secondimage|imagename',
    possibleAnswer: '\\w+((?=\\.png)|(?=\\.jpg)|(?=\\.bmp))/g',
    difficulty: 7,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '05-12-2021 2021-05-12 2021/05/12 2021.05.12  05.12.2021 2021,05,12',
    task: 'Get all dates that start with year',
    expectedResult: '2021-05-12|2021/05/12|2021.05.12|2021,05,12',
    possibleAnswer: '\\d{4}.\\d{2}.\\d{2}/g',
    difficulty: 4,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: 'example@mail.xyz\ns1s.23.a@mail.com\nmyemail12345@gmail.com\nd35truct0r@yahoo.com\n32@@@@mailcom\nasdjlkafjias322f@gmail.nl\njohndoe321@mail.com\nexample@mail\n****@mail.com',
    task: 'Get correct emails',
    expectedResult:
      'example@mail.xyz|myemail12345@gmail.com|d35truct0r@yahoo.com|asdjlkafjias322f@gmail.nl|johndoe321@mail.com',
    possibleAnswer: '^\\w+@\\w+\\.\\w{2,3}/gm',
    difficulty: 5,
    functionName: 'get',
    modes: '1,2',
  },
  {
    text: '!wr0ngnickname\nwr0ngnickname\nnickname123456\n321emankcin\nn1ckname\njohn123\nwrongagain',
    task: 'Get lines with that start with letters and end with digits',
    expectedResult: 'nickname123456|john123',
    possibleAnswer: `^[a-zA-Z]+[0-9]+$/gm`,
    difficulty: 5,
    functionName: 'get',
    modes: '1,2',
  },
];

module.exports = { questionsData };
