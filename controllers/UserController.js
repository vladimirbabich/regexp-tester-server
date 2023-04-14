const { User } = require('../models/models');
const USERNAME_DIGITS_LENGTH = 5;

class UserController {
  async registration(req, res) {
    try {
      //for now only nickname comes in
      const { nickname, email, pass } = req.body;
      const createdAt = new Date();
      const user = await User.create({
        nickname,
        email,
        pass,
        createdAt,
        updatedAt: createdAt,
      });
      return res.json(nickname);
    } catch (e) {
      return res.json(e);
    }
  }
  async update(req, res) {
    try {
      const { id, nickname, email } = req.body;
      const updatedAt = new Date();
      let user;
      if (nickname)
        user = await User.update({ nickname, updatedAt }, { where: { id } });
      else {
        user = await User.update({ email, updatedAt }, { where: { id } });
      }
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  }
  async getNewUserName(req, res) {
    try {
      const users = await User.findAll();

      function getRandomUserName(users) {
        const randomNumber = (Math.random() * 10).toString().split('.')[1];
        const newUserName = `user${randomNumber.slice(
          0,
          USERNAME_DIGITS_LENGTH
        )}`;

        const userNames = users.map((el) => el.nickname);
        if (userNames.indexOf(newUserName) >= 0) {
          return getRandomUserName(users);
        }
        return newUserName;
      }
      const newUserName = getRandomUserName(users);
      const createdAt = new Date();
      const user = await User.create({
        nickname: newUserName,
        createdAt,
        updatedAt: createdAt,
      });
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new UserController();
