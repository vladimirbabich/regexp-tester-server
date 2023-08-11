const { User, UserQuiz, Quiz } = require('../databaseModels');

class UserQuizController {
  async create(req, res) {
    try {
      const user = req.user;
      const { timeSpent, score, quizId } = req.body;
      const token = req.updatedToken;
      if (!user && !token) return res.status(500).json('User not found');

      const quiz = await Quiz.findOne({ where: { id: quizId } });
      if (!quizId || !quiz) return res.status(500).json('Quiz not found');

      if (score < 1)
        return res.status(400).json({
          msg: 'The result was not saved, Your score is 0 points. Try again!',
          token: token,
        });
      const variant = await UserQuiz.findOne({
        where: { userId: user.id, quizId },
      });
      if (variant) {
        if (variant.score < score) {
          variant.score = score;
          variant.timeSpent = timeSpent;
          variant.createdAt = new Date();
          variant.save();
          return res.json({
            msg: 'Your highscore has been updated',
            token: token,
          });
        }
        return res.json({
          msg: 'Your current score is worse than previous',
          token: token,
        });
      }
      const userQuiz = await UserQuiz.create({
        timeSpent: timeSpent || 1,
        createdAt: new Date(),
        score,
        quizId,
        userId: user.id,
      });

      if (userQuiz)
        return res.json({
          msg: 'Your results was saved!',
          token,
          user,
        });

      return res.json({
        msg: 'Problem with saving results',
        token,
        user,
      });
    } catch (e) {
      console.error(e);
      return res.status(400).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const { id: quizId } = req.params;
      const { limit } = req.query;
      const token = req.updatedToken;
      console.log(quizId, limit);
      if (!quizId) return res.status(500).json('Incorrect quiz ID');
      const count = await UserQuiz.count({ where: { quizId } });
      const userQuizzes = await UserQuiz.findAll({
        where: { quizId },
        order: [['score', 'DESC']],
        limit: limit || 10,
      });

      if (userQuizzes && userQuizzes.length > 0) {
        const users = await User.findAll({
          where: { id: userQuizzes.map((uq) => uq.userId) },
        });
        const userNames = users.map((user) => ({
          id: user.id,
          username: user.nickname,
        }));
        const prepUserQuizzes = userQuizzes
          .map((el) => el.dataValues)
          .map(({ userId, ...otherAttrs }) => {
            return {
              ...otherAttrs,
              userId,
              username:
                userNames[
                  userNames.map((userName) => userName.id).indexOf(userId)
                ].username,
            };
          });
        return res.json({ quizzes: prepUserQuizzes, count, token });
      }

      return res.status(500).json('No quizzes found');
    } catch (e) {
      console.error(e);
      return res.status(400).json(e);
    }
  }
}

module.exports = new UserQuizController();
