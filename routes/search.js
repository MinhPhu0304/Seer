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
  // eslint-disable-next-line no-console
  const queryResult = await Article.find(dbQuery).catch((e) => console.error(e));
  return queryResult;
}

function constructArticleQuery(requestQuery) {
  const FilterField = ['method', 'methodlogy', 'benefit', 'participants'];
  return Object.keys(requestQuery).reduce((acc, currentIndexValue) => {
    if (FilterField.includes(currentIndexValue)) {
      const operatorQuery = constructFieldQueryWithOperator(requestQuery[currentIndexValue]);
      return {
        ...acc,
        [currentIndexValue]: {
          ...operatorQuery,
        },
      };
    }
    return {
      ...acc,
      [currentIndexValue]: requestQuery[currentIndexValue],
    };
  }, {});
}

function constructFieldQueryWithOperator(value) {
  return value.split(',').reduce((currentFieldQuery, currentValue) => {
    const [operator, valueFilter] = currentValue.split(':');
    return {
      ...currentFieldQuery,
      [operator]: valueFilter,
    };
  }, {});
}

module.exports = {
  searchRouter,
};
