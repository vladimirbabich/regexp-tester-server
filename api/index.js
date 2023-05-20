const app = require('../index');
const { createServer } = require('vercel');

module.exports = createServer(app);
