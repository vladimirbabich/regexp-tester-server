const { questionsData } = require('./questionsData');
const { reQuizQuestions } = require('./reQuizData');
const { testData } = require('./testData');

const data = {
  user: [
    {
      nickname: 'sky high',
      email: 'sky@gmail.com',
      pass: '123123',
    },
    {
      nickname: 'JZE',
      email: 'JZE@gmail.com',
      pass: 'adsaASFAFasada',
    },
    {
      nickname: 'elziru',
      email: 'elziru@gmail.com',
      pass: 'elziru#@$231233',
    },
    {
      nickname: 'Royston',
      email: 'Royston@gmail.com',
      pass: '$Royston!iILloO0ыфвы',
    },
    {
      nickname: 'Karina Loryaeva',
      email: 'KarinaLoryaeva@gmail.com',
      pass: '$KarinaLoryaeva!iILloO0ыфвы',
    },
    {
      nickname: 'Kawasaki6547',
      email: 'Kawasaki6547@gmail.com',
      pass: '$Kawasaki6547!iILloO0ыфвы',
    },
    {
      nickname: 'radiosity',
      email: 'radiosity@gmail.com',
      pass: '$radiosity!iILloO0ыфвы',
    },
    {
      nickname: 'm.amin.s96',
      email: 'm.amin.s96@gmail.com',
      pass: '$m.amin.s96!iILloO0ыфвы',
    },
    {
      nickname: 'Kuzmin',
      email: 'Kuzmin@gmail.com',
      pass: '$Kuzmin!iILloO0ыфвы',
    },
    {
      nickname: 'Anonymous',
      email: 'Anonymous@gmail.com',
      pass: '$Anonymous!iILloO0ыфвы',
    },
    {
      nickname: 'yamaya',
      email: 'yamaya@gmail.com',
      pass: '$yamaya!iILloO0ыфвы',
    },
    {
      nickname: 'kostebek',
      email: 'kostebek@gmail.com',
      pass: '$kostebek!iILloO0ыфвы',
    },
    {
      nickname: 'DaiGoRow',
      email: 'DaiGoRow@gmail.com',
      pass: '$DaiGoRow!iILloO0ыфвы',
    },
    {
      nickname: 'Gertoperto',
      email: 'Gertoperto@gmail.com',
      pass: '$Gertoperto!iILloO0ыфвы',
    },
    {
      nickname: 'Courier',
      email: 'Courier@gmail.com',
      pass: '$Courier!iILloO0ыфвы',
    },
  ],
  mode: [
    { mode: 'minutes-5', timeType: 'time' },
    { mode: 'all-questions', timeType: 'timeless' },
    { mode: 'quiz', timeType: 'timeless' },
  ],
  question: questionsData,
  test: testData,
  quiz: [
    {
      title: 'Regular Expressions',
      description:
        'Test your knowledge of regular expressions, choose 1 or more answers on every question!',
      questions: reQuizQuestions,
    },
  ],
  userQuiz: [
    { quizId: 1, timeSpent: 56, score: 1746 },
    { quizId: 1, timeSpent: 210, score: 1917 },
    { quizId: 1, timeSpent: 352, score: 1354 },
    { quizId: 1, timeSpent: 194, score: 986 },
    { quizId: 1, timeSpent: 456, score: 2531 },
    { quizId: 1, timeSpent: 280, score: 715 },
    { quizId: 1, timeSpent: 312, score: 1926 },
    { quizId: 1, timeSpent: 105, score: 1743 },
  ],
};

module.exports = data;
// r7 g17 = 24
