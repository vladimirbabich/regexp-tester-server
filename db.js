const isLocalMode = false;
const settings = ((isLocalMode) => {
  return isLocalMode
    ? {
        name: process.env.LOCAL_DB_NAME,
        user: process.env.LOCAL_DB_USER,
        pass: process.env.LOCAL_DB_PASS,
        host: process.env.LOCAL_DB_HOST,
        port: process.env.LOCAL_DB_PORT,
      }
    : {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
      };
})();
const { Sequelize } = require('sequelize');
module.exports = new Sequelize(settings.name, settings.user, settings.pass, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  host: settings.host,
  port: settings.port,
  logging: false,
  timezone: '+00:00',
  define: {
    timestamps: false,
  },
});
