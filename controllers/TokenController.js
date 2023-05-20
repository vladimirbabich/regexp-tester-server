const jwt = require('jsonwebtoken');

function generateJwt(id, nickname) {
  // console.log('generateJwt');
  // console.log(id, nickname);
  return jwt.sign({ id, nickname }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
}
module.exports = generateJwt;
