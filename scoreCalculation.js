const log = require('./log.ts');
function calculateScore(testQuestions, timeType, timeSpent) {
  const SKIP_PENALTY_DIVIDER = 4;
  const NO_SKIP_BONUS = 200;
  const TIME_BONUS = 10000;
  const answeredScore = getScore(
    testQuestions,
    (accum, el) => (el.userAnswer ? ++accum : accum),
    (accum, el) => (el.userAnswer ? accum + el.difficulty : accum)
  );
  if (Number.isNaN(answeredScore)) {
    //no answered questions - reject creating
    return res.json('No answered questions');
  }
  let skippedScore = getScore(
    testQuestions,
    (accum, el) => (!el.userAnswer ? ++accum : accum),
    (accum, el) => (!el.userAnswer ? accum + el.difficulty : accum)
  );

  if (Number.isNaN(skippedScore)) {
    //made skippedScore negative NO_SKIP_BONUS to add value into answeredScore as a bonus
    skippedScore = -1 * NO_SKIP_BONUS;
  }

  const questionScore =
    skippedScore < 0
      ? parseInt(answeredScore - skippedScore)
      : parseInt(answeredScore - skippedScore / SKIP_PENALTY_DIVIDER);

  const answeredCount = testQuestions.reduce(
    (accum, el) => (el.userAnswer ? ++accum : accum),
    0
  );

  return parseInt((timeSpent / answeredCount / 1000) * questionScore);
  //timeType == 'time'
  // ? questionScore
  // : timeSpent < 0
  // ? questionScore
  // : TIME_BONUS - timeSpent + questionScore;
}

function getScore(testQuestions, callbackCounter, callbackSumDiff) {
  const initialValue = 0;
  const DIFF_MULTIPLIERS = [0, 1, 1.5, 2, 2.5, 4, 5, 7.14, 9.37, 11.11, 15];
  console.log(testQuestions);
  const count = testQuestions.reduce(callbackCounter, initialValue);
  const sumDiff = testQuestions.reduce(callbackSumDiff, initialValue);
  const avgDiff = sumDiff / count;
  const scoreForOneQuestion = avgDiff * DIFF_MULTIPLIERS[Math.round(avgDiff)];
  log(
    'Log',
    count,
    sumDiff,
    avgDiff,
    scoreForOneQuestion,
    scoreForOneQuestion * count
  );
  return scoreForOneQuestion * count;
}

module.exports = calculateScore;
