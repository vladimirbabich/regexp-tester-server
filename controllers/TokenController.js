const jwt = require('jsonwebtoken');

function generateJwt(id, nickname) {
  // console.log('generateJwt');
  // console.log(id, nickname);
  try {
    return jwt.sign({ id, nickname }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  } catch (e) {
    // console.log(e);
  }
}
module.exports = generateJwt;
