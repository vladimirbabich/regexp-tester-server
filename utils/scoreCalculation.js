// const log = require('./log.ts');
function calculateScoreValues(testQuestions, timeType, timeSpent) {
  const SKIP_PENALTY_DIVIDER = 4;
  const NO_SKIP_BONUS = 200;
  const BASE_NO_SKIP_BONUS = -10;
  const TIME_BONUS = 10000;
  const minTimeSpent = 1;

  const answeredScoreValues = getScoreValues(
    testQuestions,
    (accum, el) => (el.userAnswer ? ++accum : accum),
    (accum, el) => (el.userAnswer ? accum + el.difficulty : accum)
  );
  const skippedScoreValues = getScoreValues(
    testQuestions,
    (accum, el) => (!el.userAnswer ? ++accum : accum),
    (accum, el) => (!el.userAnswer ? accum + el.difficulty : accum)
  );
  if (answeredScoreValues.count < 1) {
    // console.log('SHOULD NOT CREATE INSTANCE IN DB');
    return;
  }
  if (skippedScoreValues.count == 0) {
    //made skippedScore negative NO_SKIP_BONUS to add value into answeredScore as a bonus
    skippedScoreValues.score =
      BASE_NO_SKIP_BONUS * answeredScoreValues.multiplier;
  }
  const questionScore =
    skippedScoreValues.count == 0
      ? parseInt((answeredScoreValues.score - skippedScoreValues.score) * 100)
      : parseInt(
          (answeredScoreValues.score -
            skippedScoreValues.score / SKIP_PENALTY_DIVIDER) *
            100
        );

  return {
    score: Math.round(
      (questionScore /
        (!timeSpent || timeSpent < 1 ? minTimeSpent : timeSpent)) *
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
  const DIFF_MULTIPLIERS = [0, 1, 3, 6, 8, 12, 25, 35, 50, 65, 90];
  const count = testQuestions.reduce(callbackCounter, initialValue);
  const sumDiff = testQuestions.reduce(callbackSumDiff, initialValue);

  const diff = sumDiff / count;
  const avgDiff = diff ? diff : null;
  const multiplier = avgDiff ? count * avgDiff : null;
  const scoreForOneQuestion =
    avgDiff * DIFF_MULTIPLIERS[Math.round(avgDiff ? avgDiff : 0)];

  return {
    score: scoreForOneQuestion * count * count,
    count,
    avgDiff,
    multiplier,
  };
}

module.exports = calculateScoreValues;
