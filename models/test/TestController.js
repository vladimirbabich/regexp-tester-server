const {
  Test,
  TestQuestion,
  Mode,
  Answer,
  ModeQuestion,
  User,
} = require('../databaseModels');
const calculateScoreValues = require('../../utils/scoreCalculation');

class TestController {
  async create(req, res) {
    try {
      const testVersion = 'v1';
      const userId = req.userId;
      if (!userId || userId < 1)
        return res.status(500).json({ userError: 'User not found' });

      const { modeName, timeSpent, testQuestions } = req.body;
      const token = req.updatedToken;

      const { timeType, id: modeId } = await Mode.findOne({
        where: { mode: modeName },
      });
      const scoreValues = calculateScoreValues(
        testQuestions,
        timeType,
        timeSpent
      );
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
          //create testQuestion
          uniqueAnswers.forEach((uniqueAnswer) => {
            uniqueAnswer.ids.forEach(async (id) => {
              try {
                return await TestQuestion.create({
                  testId: testDB.id,
                  questionId: testQuestions[id].questionId,
                  answerId: uniqueAnswer.answerId || null,
                });
              } catch (error) {
                return undefined;
              }
            });
          });
          return { message: 'ok' };
        })
        .catch((error) => {
          console.error(error);
          return { message: 'ERROR 523' };
        });
      return res.json({ message: finishedPromise.message, token, userId });
    } catch (e) {
      console.error(e);
      return res.status(400).json(e);
    }
  }

  async getAllForMode(req, res) {
    try {
      const { modeName, limit } = req.query;
      const token = req.updatedToken;
      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      const tests = await Test.findAll({
        where: { modeId: mode.id },
        order: [['score', 'DESC']],
        limit: limit > 0 ? limit : 10,
        // offset,
      });
      const count = await Test.count({ where: { modeId: mode.id } });
      const modifiedTests = tests.map(async (el) => {
        const user = await User.findOne({ where: { id: el.userId } });
        if (!user) {
          return undefined;
        }
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
          username: user?.nickname || 'unknown',
        };
      });

      Promise.all(modifiedTests).then((result) => {
        const tests = result.filter((el) => el);
        return res.json({ tests, count, token });
      });
    } catch (e) {
      console.error(e);
      return res.json(e);
    }
  }
}

module.exports = new TestController();
