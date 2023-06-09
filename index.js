require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const pg = require('pg');
const models = require('./models/databaseModels');
const cors = require('cors');
const router = require('./routes/index');
const testDB = require('./defaultDBinsertion');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.drop({ force: true }); //only if  need to insert default test data into DB
    // console.log('All tables dropped!');
    // await sequelize.sync({ force: true });
    // testDB();
    app.listen(PORT, () => {
      console.log('server started on: ' + PORT);
    });
  } catch (e) {
    await sequelize.close();
    console.error(e);
  }
};

start();

module.exports = app;
