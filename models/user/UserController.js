const bcrypt = require('bcrypt');
const { User } = require('../databaseModels');

const generateJwt = require('../../utils/generateJwt');

class UserController {
  async login(req, res) {
    try {
      //for now only nickname comes in
      const { nicknameOrEmail, pass } = req.body;
      let user = await User.findOne({ where: { nickname: nicknameOrEmail } });
      if (!user)
        user = await User.findOne({ where: { email: nicknameOrEmail } });
      if (!user)
        return res.status(400).json({
          nickError: 'User with this nickname or email was not found',
        });

      if (!pass || !bcrypt.compareSync(pass, user.pass))
        return res.status(400).json({ passError: 'Wrong password' });

      const token = generateJwt(user.id, user.nickname);
      return res.json({ token });
    } catch (e) {
      console.error(e);
      return res
        .status(400)
        .json({ error: 'Sign in error. Try later, please' });
    }
  }
  async registration(req, res) {
    try {
      const { nickname, email, pass } = req.body;
      if (!nickname || nickname?.length < 3) {
        return res.json({
          nickError: 'Nickname should have atleast 3 symbols',
        });
      }
      if (!pass || pass?.length < 6) {
        return res.json({
          passError: 'Password should have atleast 6 symbols',
        });
      }
      if (nickname?.length > 255 || pass?.length > 255 || email?.length > 255) {
        return res.json({
          nickError: 'Too big nickname, password or email!',
        });
      }
      const createdAt = new Date();
      const sameNickUser = await User.findOne({ where: { nickname } });
      if (sameNickUser) {
        return res.json({ nickError: 'That nickname is taken, try another' });
      }
      const hashedPass = await bcrypt.hash(pass, 5);
      const user = await User.create({
        nickname,
        email,
        pass: hashedPass,
        createdAt,
        updatedAt: createdAt,
      });
      if (!user) {
        console.error('not user');
        return res.json({ DBError: 'Problem with database, try later please' });
      }
      const token = generateJwt(user.id, nickname);
      return res.json({ token });
    } catch (e) {
      console.error(e);
      console.error(token);
      return res.json({ DBError: 'Problem with database, try later please!' });
    }
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.nickname);
    return res.json({ token });
  }

  async clearUnusedAccs(req, res) {
    //for later(automated call every ~7 days)
    //purpose: to delete from DB instances, that was not used
    //(dont have any of completed tests)
  }
}

module.exports = new UserController();
