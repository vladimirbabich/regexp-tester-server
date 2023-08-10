const { Mode } = require('../databaseModels');
const USERNAME_DIGITS_LENGTH = 5;

class UserController {
  async create(req, res) {
    try {
      //for now only nickname comes in
      const { mode, timeType } = req.body;
      const user = await Mode.create({
        mode,
        timeType,
      });
      return res.json('ok');
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new UserController();
