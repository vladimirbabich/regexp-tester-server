const axios = require('axios');
const data = require('./defaultData');

const urlArray = [
  // {
  //   controllerName: 'user',
  //   url: 'http://localhost:7000/api/user/',
  // },
  {
    controllerName: 'mode',
    url: 'http://localhost:7000/api/mode/create',
  },
  {
    controllerName: 'question',
    url: 'http://localhost:7000/api/question/create',
  },
  {
    controllerName: 'quiz',
    url: 'http://localhost:7000/api/quiz/create',
  },
  {
    controllerName: 'test',
    url: 'http://localhost:7000/api/test/create',
  },
  {
    controllerName: 'userQuiz',
    url: 'http://localhost:7000/api/user-quiz/create',
  },
];
function insertAndWaitDBInsertion(index) {
  let curIndex = index ? index : 0;
  let promises = insertTable(data, urlArray[curIndex]);
  Promise.all(promises).then(() => {
    if (curIndex < urlArray.length - 1) {
      insertAndWaitDBInsertion(++curIndex);
    } else {
      console.log('ok, all types of DB was successfully inserted');
    }
  });
}

function testDB() {
  console.log('testDB');
  insertAndWaitDBInsertion(0);
}

function insertTable(dataForDB, { controllerName, url }) {
  let promises = [];
  dataForDB[controllerName].map((el) => {
    promises.push(
      axios
        .post(url, el)
        .then(function (response) {})
        .catch(function (error) {
          console.error(error);
        })
    );
  });
  return promises;
}

module.exports = testDB;
