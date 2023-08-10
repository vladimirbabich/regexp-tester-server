const { User, Quiz, QuizQuestion } = require('../databaseModels');
const calculateScoreValues = require('../../utils/scoreCalculation');

class QuizController {
  async create(req, res) {
    try {
      const userId = req.userId; //in the future this function would be used by any user to create custom quiz

      const { title, description, questions } = req.body;
      if (!title || !questions || questions.length === 0)
        return res.status(500).json('Error: incorrect data');

      const quizDB = await Quiz.create({ title, description });
      const prepQuestions = questions.map((question) => ({
        ...question,
        quizId: quizDB.id,
      }));
      const questionsDB = await QuizQuestion.bulkCreate(prepQuestions);
      return res.json('Quiz was successfully created!');
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    //sometime later
    try {
    } catch (e) {
      return res.json(e);
    }
  }
  async get(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const quiz = await Quiz.findOne({ where: { id } });
        if (quiz) return res.json(quiz);
        return res.json(`Quiz with id: "${id}" not found`);
      }

      const quizzes = await Quiz.findAll();

      if (quizzes) return res.json(quizzes);

      console.log('end of try');
      return res.json('No quizzes found, try later');
    } catch (e) {
      console.log('error');
      return res.json(`Quiz with id: "${id}" not found`);
    }
  }
  async getQuizQuestions(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(404).json('No questions found for this quiz');

      const questions = await QuizQuestion.findAll({ where: { quizId: id } });
      if (questions) return res.json(questions);

      return res.status(404).json('No questions found for this quiz');
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new QuizController();
