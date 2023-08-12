const isLocalMode = false;
function getSettings(isLocal) {
  console.log(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.POSTGRES_PASSWORD,
    process.env.POSTGRES_HOST,
    process.env.DB_PORT
  );
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
        pass: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: process.env.DB_PORT,
      };
}
const settings = getSettings(isLocalMode);

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
