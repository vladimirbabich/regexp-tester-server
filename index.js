require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const pg = require('pg');
const cors = require('cors');
const router = require('./models/routes');
const testDB = require('./default-manipulations/defaultDBinsertion');
const LOCAL_PORT = process.env.LOCAL_PORT || 5000;
const app = express();

const whitelist = [
  'https://retester.tech/',
  'https://regexp-tester.vercel.app',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.drop({ force: true }); //only if  need to insert default test data into DB
    // console.log('All tables dropped!');
    // await sequelize.sync({ force: true });
    // testDB();
    app.listen(LOCAL_PORT, () => {
      console.log('server started on: ' + LOCAL_PORT);
    });
  } catch (e) {
    await sequelize.close();
    console.error(e);
  }
};

start();

module.exports = app;
