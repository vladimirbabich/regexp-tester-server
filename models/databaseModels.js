const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING },
  pass: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
});

const Question = sequelize.define('question', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT },
  task: { type: DataTypes.STRING },
  expectedResult: { type: DataTypes.STRING },
  possibleAnswer: { type: DataTypes.STRING },
  difficulty: { type: DataTypes.INTEGER },
  functionName: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
});

const Answer = sequelize.define('answer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  answer: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Mode = sequelize.define('mode', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mode: { type: DataTypes.STRING, allowNull: false },
  timeType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [['time', 'timeless']] },
  },
});

const Test = sequelize.define('test', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  timeSpent: { type: DataTypes.STRING },
  version: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  ansCount: { type: DataTypes.INTEGER },
  ansDiff: { type: DataTypes.FLOAT },
  skpCount: { type: DataTypes.INTEGER },
  skpDiff: { type: DataTypes.FLOAT },
  score: { type: DataTypes.INTEGER },
});

const TestQuestion = sequelize.define('test_question', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const ModeQuestion = sequelize.define('mode_question', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Test.belongsToMany(Question, { through: TestQuestion });
Question.belongsToMany(Test, { through: TestQuestion });

Answer.hasMany(TestQuestion);
TestQuestion.belongsTo(Answer);

Mode.belongsToMany(Question, { through: ModeQuestion });
Question.belongsToMany(Mode, { through: ModeQuestion });

User.hasMany(Test);
Test.belongsTo(User);

Mode.hasMany(Test);
Test.belongsTo(Mode);

module.exports = {
  User,
  Question,
  Answer,
  Mode,
  Test,
  TestQuestion,
  ModeQuestion,
};
