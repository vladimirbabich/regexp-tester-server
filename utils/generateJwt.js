const jwt = require('jsonwebtoken');

function generateJwt(id, nickname) {
  try {
    return jwt.sign({ id, nickname }, process.env.SECRET_KEY, {
      expiresIn: '90d',
    });
  } catch (e) {
    console.error(e);
  }
}
module.exports = generateJwt;
