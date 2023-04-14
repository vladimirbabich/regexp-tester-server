const {
  Test,
  TestQuestion,
  Mode,
  Answer,
  ModeQuestion,
} = require('../models/models');
const calculateScore = require('../scoreCalculation');

class TestController {
  async create(req, res) {
    try {
      const { userId, modeId, timeSpent, testQuestions } = req.body;

      const { timeType } = await Mode.findOne({ where: { id: modeId } });

      const testDB = await Test.create({
        timeSpent,
        createdAt: new Date(),
        userId,
        modeId,
        score: calculateScore(testQuestions, timeType, timeSpent),
      });

      const uniqueAnswers = []; //: Array<object> = [];
      // array for  creating Answer instances: uniqueAnswers after prep:
      // { ids:[1,2,3],
      // answer:userAnswer,
      // answerId:1 }

      //prepare array to use it for DB insertions
      for (const i in testQuestions) {
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

      //create in DB answer for each of them
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
      Promise.all(promises)
        .then((res) => {
          // console.log('uniqueAnswers ready');
          //create testQuestion
          uniqueAnswers.map((uniqueAnswer) => {
            console.log(uniqueAnswer.ids);
            uniqueAnswer.ids.map(async (id) => {
              const testQuestionDB = await TestQuestion.create({
                testId: testDB.id,
                questionId: testQuestions[id].questionId,
                answerId: uniqueAnswer.answerId || null,
              });
            });
          });
          return res.json('ok');
        })
        .catch((error) => {
          return res.json(error);
        });
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  }

  async getAllForMode(req, res) {
    try {
      const { modeName } = req.body;

      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      const tests = await Test.findAll({
        where: { modeId: mode.id },
      });

      return res.json(tests);
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new TestController();
