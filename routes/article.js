const express = require('express');

const { Article } = require('../model');

const articleRouter = express.Router();

articleRouter.post('/', async (request, response) => {
  const { body } = request;
  const result = await Article.insertMany([body]);
  return response.json(result);
});

module.exports = {
  articleRouter,
};
