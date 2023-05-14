const axios = require('axios');
const data = require('./defaultData');

const urlArray = [
  {
    controllerName: 'user',
    method: 'post',
    url: 'http://localhost:7000/api/user/',
  },
  {
    controllerName: 'mode',
    method: 'post',
    url: 'http://localhost:7000/api/mode/create',
  },
  {
    controllerName: 'question',
    method: 'post',
    url: 'http://localhost:7000/api/question/create',
  },
  // // {
  //   controllerName: 'test',
  //   method: 'post',
  //   url: 'http://localhost:7000/api/test/create',
  // },
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

function insertTable(dataForDB, { controllerName, method, url }) {
  let promises = [];
  dataForDB[controllerName].map((el) => {
    promises.push(
      axios
        .post(url, el)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        })
    );
  });
  return promises;
}

module.exports = testDB;
