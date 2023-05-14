const {
  Question,
  User,
  ModeQuestion,
  Mode,
} = require('../models/databaseModels');

class QuestionController {
  async create(req, res) {
    try {
      const { text, task, expectedResult, difficulty, functionName, modes } =
        req.body;
      // const token = req.updatedToken;

      const question = await Question.create({
        text,
        task,
        expectedResult,
        difficulty,
        functionName,
        createdAt: new Date(),
      });

      const modeQuestionObjects = modes.split(/[,/|.;]/g).map((el) => ({
        modeId: el,
        questionId: question.id,
      }));
      const modeQuestions = await ModeQuestion.bulkCreate(modeQuestionObjects);
      return res.json({ message: 'ok'});
    } catch (e) {
      return res.status(400).json({ error: e});
    }
  }
  async getAllForMode(req, res) {
    const token = req.updatedToken;
    try {
      const { modeName } = req.query;
      //need to filter only questions of some mode
      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      const modeQuestions = await ModeQuestion.findAll({
        where: { modeId: mode.id },
      });

      const questionIds = modeQuestions.map((el) => el.questionId);

      const questions = await Question.findAll({ where: { id: questionIds } });
      const modifiedQuestions = questions.map((el) => {
        const { difficulty, expectedResult, functionName, id, task, text } = el;
        return {
          difficulty,
          expectedResult,
          functionName,
          id,
          task,
          text,
          possibleAnswer: el.possibleAnswer,
        };
      });
      return res.json({ questions: modifiedQuestions, token });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ error: e.message, token });
    }
  }
  async getAll(req, res) {
    try {
      const questions = await Question.findAll();
      return res.json(questions);
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new QuestionController();
