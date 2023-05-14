const {
  Test,
  TestQuestion,
  Mode,
  Answer,
  ModeQuestion,
  User,
} = require('../models/databaseModels');
const calculateScoreValues = require('../scoreCalculation');

class TestController {
  async create(req, res) {
    try {
      const testVersion = 'v1';
      const { userId, modeName, timeSpent, testQuestions } = req.body;
      console.log({ userId, modeName, timeSpent, testQuestions });
      const token = req.updatedToken;

      const { timeType, id: modeId } = await Mode.findOne({
        where: { mode: modeName },
      });
      const scoreValues = calculateScoreValues(
        testQuestions,
        timeType,
        timeSpent
      );

      if (userId < 0) return res.json({ userError: 'User not found' });
      // console.log('score');
      // console.log(scoreValues);
      const testDB = await Test.create({
        timeSpent,
        createdAt: new Date(),
        userId,
        modeId,
        version: testVersion,
        score: scoreValues.score,
        ansCount: scoreValues.ansCount,
        ansDiff: scoreValues.ansDiff,
        skpCount: scoreValues.skpCount,
        skpDiff: scoreValues.skpDiff,
      });

      const uniqueAnswers = []; //: Array<object> = [];
      // array for  creating Answer instances: uniqueAnswers after prep:
      // { ids:[1,2,3],
      // answer:userAnswer,
      // answerId:1 }

      //prepare array to use it for DB insertions
      for (const i in testQuestions) {
        if (!testQuestions[i].userAnswer) continue;
        let index = -1;
        if (uniqueAnswers.length > 0) {
          index = uniqueAnswers
            .map((el) => el.answer)
            .indexOf(testQuestions[i].userAnswer);
        }
        if (index == -1) {
          //if answer is unique
          uniqueAnswers.push({
            ids: [i], //index of current testQuestion
            answer: testQuestions[i].userAnswer,
          });
        } else {
          //if not unique - push current id in ids of uniqueAnswers[index]
          uniqueAnswers[index].ids.push(i);
        }
      }

      // create in DB answer for each of them
      const promises = uniqueAnswers.map((uniqueAnswer) => {
        return Answer.create({ answer: uniqueAnswer.answer })
          .then(({ dataValues }) => {
            uniqueAnswer.answerId = dataValues.id;
            return dataValues;
          })
          .catch((error) => {
            return Answer.findOne({
              where: { answer: uniqueAnswer.answer },
            }).then(({ dataValues }) => {
              uniqueAnswer.answerId = dataValues.id;
              return dataValues;
            });
          });
      });

      const finishedPromise = await Promise.all(promises)
        .then((res) => {
          // console.log('res');
          // console.log(res);
          //create testQuestion
          uniqueAnswers.forEach((uniqueAnswer) => {
            uniqueAnswer.ids.forEach(async (id) => {
              return await TestQuestion.create({
                testId: testDB.id,
                questionId: testQuestions[id].questionId,
                answerId: uniqueAnswer.answerId || null,
              });
            });
          });
          return { message: 'ok' };
        })
        .catch((error) => {
          console.log('PROMISE ERROR');
          console.error(error);
          return { message: 'PROMISE ERROR' };
        });
      return res.json({ message: finishedPromise.message, token });
    } catch (e) {
      console.log('Function ERROR');
      console.error(e);
      return res.status(400).json(e);
    }
  }

  async getAllForMode(req, res) {
    try {
      const { modeName, limit, offset } = req.query;
      const token = req.updatedToken;

      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      // console.log(mode);
      const tests = await Test.findAll({
        where: { modeId: mode.id },
        order: [['score', 'DESC']],
        limit: limit,
        // offset,
      });
      const count = await Test.count({ where: { modeId: mode.id } });
      // console.log('count');
      // console.log(count);
      const modifiedTests = tests.map(async (el) => {
        const user = await User.findOne({ where: { id: el.userId } });
        if (!user) return res.json({ userError: 'User not found' });
        return {
          id: el.id,
          timeSpent: el.timeSpent,
          version: el.version,
          createdAt: el.createdAt,
          score: el.score,
          ansCount: el.ansCount,
          ansDiff: el.ansDiff,
          skpCount: el.skpCount,
          skpDiff: el.skpDiff,
          username: user?.nickname || 'hui',
        };
      });
      Promise.all(modifiedTests).then((result) => {
        // console.log('result');
        // console.log(result);
        const tests = result;
        return res.json({ tests, count, token });
      });
    } catch (e) {
      console.log('testController ERROR');
      console.error(e);
      return res.json(e);
    }
  }
}

module.exports = new TestController();
