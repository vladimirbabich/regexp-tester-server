const log = require('./log.ts');
function calculateScoreValues(testQuestions, timeType, timeSpent) {
  const SKIP_PENALTY_DIVIDER = 4;
  const NO_SKIP_BONUS = 200;
  const TIME_BONUS = 10000;
  const minTimeSpent = 1;

  const answeredScoreValues = getScoreValues(
    testQuestions,
    (accum, el) => (el.userAnswer ? ++accum : accum),
    (accum, el) => (el.userAnswer ? accum + el.difficulty : accum)
  );
  // if (Number.isNaN(answeredScore)) {
  //   //no answered questions - reject creating
  //   return res.json('No answered questions');
  // }
  const skippedScoreValues = getScoreValues(
    testQuestions,
    (accum, el) => (!el.userAnswer ? ++accum : accum),
    (accum, el) => (!el.userAnswer ? accum + el.difficulty : accum)
  );

  if (skippedScoreValues.count == 0) {
    //made skippedScore negative NO_SKIP_BONUS to add value into answeredScore as a bonus
    skippedScoreValues.score = -1 * NO_SKIP_BONUS;
  }

  const questionScore =
    skippedScoreValues.count == 0
      ? parseInt(answeredScoreValues.score - skippedScoreValues.score) * 100
      : parseInt(
          answeredScoreValues.score -
            skippedScoreValues.score / SKIP_PENALTY_DIVIDER
        ) * 100;

  if (Number.isNaN(answeredScoreValues.avgDiff))
    answeredScoreValues.avgDiff = null;
  if (Number.isNaN(skippedScoreValues.avgDiff))
    skippedScoreValues.avgDiff = null;

  console.log('score1:');
  console.log(questionScore);
  console.log(!timeSpent || timeSpent < 1 ? minTimeSpent : timeSpent);
  return {
    score: parseInt(
      (questionScore / (!timeSpent || timeSpent < 1)
        ? minTimeSpent
        : timeSpent) *
        answeredScoreValues.avgDiff *
        answeredScoreValues.avgDiff
    ),
    ansCount: answeredScoreValues.count,
    ansDiff: answeredScoreValues.avgDiff,
    skpCount: skippedScoreValues.count,
    skpDiff: skippedScoreValues.avgDiff,
  };
}

function getScoreValues(testQuestions, callbackCounter, callbackSumDiff) {
  const initialValue = 0;
  const DIFF_MULTIPLIERS = [0, 1, 3, 6, 12, 20, 26, 32, 40, 45, 50];
  const count = testQuestions.reduce(callbackCounter, initialValue);
  const sumDiff = testQuestions.reduce(callbackSumDiff, initialValue);
  const avgDiff = sumDiff / count;
  const scoreForOneQuestion = avgDiff * DIFF_MULTIPLIERS[Math.round(avgDiff)];
  console.log(testQuestions);
  log(
    'Log',
    count
    // sumDiff,
    // avgDiff,
    // scoreForOneQuestion,
    // scoreForOneQuestion * count
  );
  return { score: scoreForOneQuestion * count, count, avgDiff };
}

module.exports = calculateScoreValues;
