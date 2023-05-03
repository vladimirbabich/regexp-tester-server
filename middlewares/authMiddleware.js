const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
  if (req.method == 'OPTIONS') next();
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token)
      return res.status(401).json({ message: 'User is not authorized' }); //no token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('decoded');
    console.log(decoded);
    req.user = decoded;
    // throw new Error(12345);
    next();
  } catch (e) {
    console.log('123');
    console.log(e);
    return res.status(401).json({ message: 'Error: User is not authorized' }); //jwt expired
  }
};
