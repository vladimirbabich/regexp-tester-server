const isLocalMode = true;

const { Sequelize } = require('sequelize');
module.exports = isLocalMode
  ? new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false,
        timezone: '+00:00',
        define: {
          timestamps: false,
        },
      }
    )
  : new Sequelize('verceldb', 'default', '5ARYmOZxPlD7', {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
        },
      },
      host: 'ep-hidden-star-040978-pooler.us-east-1.postgres.vercel-storage.com',
      port: 5432,
      logging: false,
      timezone: '+00:00',
      define: {
        timestamps: false,
      },
    });
