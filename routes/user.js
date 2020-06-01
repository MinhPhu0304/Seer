const express = require('express');

const { User } = require('../model');

const userRouter = express.Router();

// Root router url which is URL/search
userRouter.get('/', async (request, response) => {
  const { params } = request;
  const result = await User.find(params);
  return response.json(result);
});

userRouter.post('/new', async (request, response) => {
  const { body } = request;
  const result = await User.insertMany(body);
  return response.json(result);
});

module.exports = {
  userRouter,
};
