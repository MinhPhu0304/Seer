const express = require('express');

const { submitedArticleModel } = require('../model/submitArticle');

const articleRouter = express.Router();

articleRouter.get('/', async (request, response) => {
  const submitedArticle = await submitedArticleModel.find();
  return response.status(200).json(submitedArticle).end();
});

articleRouter.post('/', async (request, response) => {
  const { body } = request;
  const result = await submitedArticleModel.insertMany([body]).catch(() => {
    response.status(400).json('Invalid data');
  });
  return response.json(result);
});

module.exports = {
  articleRouter,
};
