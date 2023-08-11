const jwt = require('jsonwebtoken');
const generateJwt = require('../utils/generateJwt');
module.exports = function (req, res, next) {
  if (req.method == 'OPTIONS') next();
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const updatedToken = generateJwt(decoded.id, decoded.nickname);
    req.updatedToken = updatedToken;
    req.user = { id: decoded.id };
    next();
  } catch (e) {
    next();
  }
};
