const { User } = require('../models/databaseModels');

module.exports = async function (req, res, next) {
  if (req.method == 'OPTIONS') next();
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      if (token) {
        next();
      }
    } else {
      const genId = req.headers['gen-user'];
      const newUserId = await checkGenIdAndCreate(genId);
      req.userId = newUserId;
      next();
    }
  } catch (e) {
    console.error(e);
    next();
  }
};

async function checkGenIdAndCreate(genId) {
  let usernameDigitsLength = 5;
  try {
    if (genId) {
      const user = await User.findOne({ where: { id: genId } }); //findById(genId);
      if (user) {
        return user.id;
      }
    }
    const newUser = await createUser();
    return newUser.id;
  } catch (e) {
    console.error(e);
    return undefined;
  }

  async function createUser() {
    const users = await User.findAll();
    let loopCount = 0;

    function getRandomUserName(users) {
      //if was left no unique numbers of usernameDigitsLength -> increment usernameDigitsLength
      if (loopCount > 20) usernameDigitsLength += 1;
      loopCount += 1;
      const randomNumber = (Math.random() * 10).toString().split('.')[1];
      const newUserName = `user${randomNumber.slice(0, usernameDigitsLength)}`;

      const userNames = users.map((el) => el.nickname);
      if (userNames.indexOf(newUserName) > -1) {
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
}
