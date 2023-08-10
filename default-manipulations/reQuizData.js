const reQuizQuestions = [
  {
    question: 'How to match all space symbols',
    options: '*bn||*bb||*br',
    answers: '*bs',
    difficulty: 1,
  },
  {
    question: 'What does the command ab+c search for',
    options:
      'ab,abc,abcc||ac,abc,abbc||None of the options||abcc, abccc, abcccc',
    answers: 'abc,abbc,abbbc',
    difficulty: 2,
  },
  {
    question:
      'The number of matches does the command a{1,3} give with the string "aabbaaaa"',
    options: '1||2||4',
    answers: 3,
    difficulty: 3,
  },
  {
    question: 'What does the character class \\D finds the match',
    options: 'Decimal digits||Division||None of the options',
    answers: 'Non-decimal digits',
    difficulty: 2,
  },
  {
    question: 'What does the character class \\G match in regular expressions',
    options: 'Start of a string||End of a string',
    answers: 'Point where the previous match ended',
    difficulty: 4,
  },
  {
    question: 'What does the character class \\b match in regular expressions',
    options: 'Beginning of a word||End of a word',
    answers: 'Beginning or end of a word',
    difficulty: 2,
  },
  {
    question: 'What does the command "?=" search for',
    options:
      'Positive lookbehind||Preceding character zero or one time||Preceding character zero or more times',
    answers: 'Positive lookahead',
    difficulty: 2,
  },
  {
    question: 'What does the command "?<=" search for',
    options:
      'Preceding character zero or one time||Preceding character zero or more times||Positive lookahead',
    answers: 'Positive lookbehind',
    difficulty: 2,
  },
  {
    question: 'How to match HTML tags, for example <body> or </div>',
    options: '<*bw+>||<*b*s?*bw{1,3}>||*b<\\/?\\w+*b>',
    answers: '<*b*s?*bw+>',
    difficulty: 4,
  },
  {
    question: 'How to match a username that has at least 2 digits at the end',
    options: '*bw+*bd||*bw+*bd{1,2}||*bw+*bd{3}',
    answers: '*bw+*bd{2,}',
    difficulty: 4,
  },
  {
    question: 'How to match a username that has exactly 2 digits at the end',
    options: '*bw+*bd||*bw+*bd{1,2}||*bw+*bd{3}',
    answers: '*bw+*bd{2}',
    difficulty: 4,
  },
  {
    question: 'How to match all symbols except digits',
    options: '*bW||*bd||!d',
    answers: '*bD',
    difficulty: 1,
  },
  {
    question: 'What is the difference between quantifiers "+" and "*"',
    options:
      '"+" matches the preceding character 0 or 1 time, while "*" matches 1 or more times||"+" matches the preceding character exactly 1 time, while "*" matches 0 or more times||"+" and "*" are equivalent and can be used interchangeably',
    answers:
      '"+" matches the preceding character 1 or more times, while "*" matches 0 or more times',
    difficulty: 2,
  },
  {
    question: 'What does the character class \\w match in regular expressions',
    options:
      'Whitespace characters||Non-whitespace characters||Non-word characters',
    answers: 'Word characters',
    difficulty: 1,
  },
  {
    question: 'What does the character class \\S match in regular expressions',
    options: 'Whitespace characters||Word characters||Non-word characters',
    answers: 'Non-whitespace characters',
    difficulty: 2,
  },
  {
    question: 'What does the character class \\A match in regular expressions',
    options: ' End of a string||Any character',
    answers: 'Start of a string',
    difficulty: 4,
  },
  {
    question: 'How to match the word "hello" at the beginning of a string',
    options: 'hello||hello$||!hello',
    answers: '^hello',
    difficulty: 2,
  },
  {
    question: 'How to search a match for 1,2,3,4?',
    options: '1234||1-4||(1-4)',
    answers: '[1-4]||[1234]',
    difficulty: 3,
  },
  {
    question: 'How to match a string that contains either "cat" or "dog"',
    options: 'cat*p*pdog||cat&dog||cat*bdog',
    answers: 'cat*pdog',
    difficulty: 4,
  },
  {
    question:
      'How to match a string that starts with a letter and ends with a number',
    options: '^[a-z]+[0-9]+$||[a-z][0-9]||[a-z]+[0-9]+[a-z]+[0-9]+$',
    answers: '^[a-z]+[0-9]+$',
    difficulty: 5,
  },
  {
    question:
      'How to match a string that contains the word "apple" followed by any number of characters',
    options: 'apple+||apple*||apple[a-z]+',
    answers: 'apple.*',
    difficulty: 3,
  },
  {
    question: 'What does the character class \\t match in a regular expression',
    options:
      'Newline character||Backspace character||Carriage return character',
    answers: 'Tab character',
    difficulty: 2,
  },
  {
    question:
      'How to match a string that starts with any number of digits followed by a hyphen and any number of letters',
    options: '[0-9]+*b-[a-zA-Z]+||[0-9]+*b-[A-Z]+',
    answers: '[0-9]+-[a-zA-Z]+||*bd+-*bw+',
    difficulty: 4,
  },
  {
    question:
      'Which of the following commands is used to match a string that ends with the word "monday"',
    options: 'monday^||^monday$||$monday^||$monday$',
    answers: 'monday$',
    difficulty: 3,
  },
  {
    question: 'How to match words "color" and "colour"',
    options: 'color*p*pcolour||colo!ur',
    answers: 'color*pcolour||colou?r||colo(u*p.?)r',
    difficulty: 5,
  },
];
module.exports = { reQuizQuestions };
