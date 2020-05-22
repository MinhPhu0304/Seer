const express = require('express');

const { Article } = require('../model');

const searchRouter = express.Router();

// Root router url which is URL/search
searchRouter.get('/', async (request, response) => {
  const searchResult = await searchArticleFrom(request);
  response.json(searchResult);
});

async function searchArticleFrom(request) {
  const dbQuery = constructArticleQuery(request.query);
  console.log(dbQuery);
  const queryResult = await Article.find(dbQuery).catch((e) => console.error(e));
  return queryResult;
}

function constructArticleQuery(requestQuery) {
  const FIELD = ['method', 'methodlogy', 'benefit', 'participants'];
  return Object.keys(requestQuery).reduce((acc, value) => {
    if (FIELD.includes(value)) {
      return {
        ...acc,
        [value]: {
          $all: requestQuery[value].split(','),
        },
      };
    }
    return {
      ...acc,
      [value]: requestQuery[value],
    };
  }, {});
}

module.exports = {
  searchRouter,
};
