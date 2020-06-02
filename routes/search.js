const express = require('express');
const { omit } = require('ramda');

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
  console.log(dbQuery);
  const queryResult = await Article.find(dbQuery).catch((e) => console.error(e));
  return queryResult;
}

function constructArticleQuery(requestQuery) {
  const FilterField = ['method', 'methodlogy', 'benefit', 'participants'];
  const convertedDateQuery = normalizeDateQuery(requestQuery);
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
    if (currentIndexValue === 'startYear' || currentIndexValue === 'endYear') {
      return acc;
    }
    return {
      ...acc,
      [currentIndexValue]: requestQuery[currentIndexValue],
    };
  }, { ...convertedDateQuery });
}

function normalizeDateQuery(requestQuery) {
  if (requestQuery.startYear == null && requestQuery.endYear == null) return requestQuery;

  if (requestQuery.startYear && requestQuery.endYear == null) {
    return {
      ...omit(requestQuery, ['startYear']),
      year: {
        $gte: requestQuery.startYear,
      },
    };
  }
  if (requestQuery.endYear && requestQuery.startYear == null) {
    return {
      ...omit(requestQuery, ['endYear']),
      year: {
        $lte: requestQuery.endYear,
      },
    };
  }
  return {
    year: {
      $gte: requestQuery.startYear,
      $lte: requestQuery.endYear,
    },
    ...omit(['endYear', 'startYear'], requestQuery),
  };
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
