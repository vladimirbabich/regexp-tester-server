const { Question, User, ModeQuestion, Mode } = require('../models/models');

class QuestionController {
  async create(req, res) {
    try {
      const { text, task, expectedResult, difficulty, functionName, modeName } =
        req.body;

      const question = await Question.create({
        text,
        task,
        expectedResult,
        difficulty,
        functionName,
        createdAt: new Date(),
      });

      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      const modeQuestion = await ModeQuestion.create({
        modeId: mode.id,
        questionId: question.id,
        createdAt: new Date(),
      });
      return res.json('ok');
    } catch (e) {
      return res.json(e);
    }
  }
  async getAllForMode(req, res) {
    try {
      const { modeName } = req.query;
      //need to filter only questions of some mode
      const mode = await Mode.findOne({ where: { mode: modeName } }); //get mode with his ID to create
      const modeQuestions = await ModeQuestion.findAll({
        where: { modeId: mode.id },
      });
      const questionIds = modeQuestions.map((el) => el.questionId);
      const questions = await Question.findAll({ where: { id: questionIds } });

      return res.json(questions);
    } catch (e) {
      return res.json(e);
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
