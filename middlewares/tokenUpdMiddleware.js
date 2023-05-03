const jwt = require('jsonwebtoken');
const generateJwt = require('./../controllers/TokenController');
module.exports = function (req, res, next) {
  if (req.method == 'OPTIONS') next();
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log('token1');
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log('decoded');
    // if token && not expired ->
    const updatedToken = generateJwt(decoded.id, decoded.nickname);
    console.log('updatedToken');
    console.log(updatedToken);
    req.updatedToken = updatedToken;
    //else do nothing
    next();
  } catch (e) {
    //do nothing
    console.error(e);
    next();
  }
};
