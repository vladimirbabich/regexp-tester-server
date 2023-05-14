const bcrypt = require('bcrypt');
const { User } = require('../models/databaseModels');

let USERNAME_DIGITS_LENGTH = 5;
const generateJwt = require('./../controllers/TokenController');

async function createUser() {
  console.log('CREATE');
  const users = await User.findAll();
  let loopCount = 0;
  function getRandomUserName(users) {
    //if was left no unique numbers of USERNAME_DIGITS_LENGTH -> increment USERNAME_DIGITS_LENGTH
    if (loopCount > 20) USERNAME_DIGITS_LENGTH += 1;
    loopCount += 1;
    const randomNumber = (Math.random() * 10).toString().split('.')[1];
    const newUserName = `user${randomNumber.slice(0, USERNAME_DIGITS_LENGTH)}`;

    const userNames = users.map((el) => el.nickname);
    if (userNames.indexOf(newUserName) >= 0) {
      return getRandomUserName(users);
    }
    return newUserName;
  }
  const newUserName = getRandomUserName(users);
  const createdAt = new Date();
  return await User.create({
    nickname: newUserName,
    createdAt,
    updatedAt: createdAt,
  });
}

class UserController {
  async login(req, res) {
    console.log('LOGIN');
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
      console.log({ token });
      return res.json({ token });
    } catch (e) {
      console.log('userController ERROR');
      console.error(e);
      return res
        .status(400)
        .json({ error: 'Sign in error. Try later, please' });
    }
  }
  async registration(req, res) {
    console.log('REGISTR');
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
      const token = generateJwt(user.id, nickname);
      if (!user)
        return res.json({ DBError: 'Problem with database, try later please' });
      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.json({ DBError: 'Problem with database, try later please' });
    }
  }

  async check(req, res) {
    console.log('CHECK');
    const token = generateJwt(req.user.id, req.user.nickname);
    return res.json({ token });
  }

  async getUniqueNickname(req, res) {
    console.log('UNIQUE');
    try {
      const user = await createUser();
      // console.log(user);
      if (!user)
        return res.json({ DBError: 'Problem with database, try later please' });
      return res.json({ id: user.id, nickname: user.nickname });
    } catch (e) {
      // console.log(e);
      return res.json(e);
    }
  }
  async clearUnusedAccs(req, res) {
    //for later(automated call every ~7 days)
    //purpose: to delete from DB instances, that was not used
    //(dont have any of completed tests)
  }
}

module.exports = new UserController();
