const express = require('express');
const bcrypt = require('bcrypt');
const { omit } = require('ramda');

const { User } = require('../model');

const userRouter = express.Router();

// Root router url which is URL/search
userRouter.get('/', async (request, response) => {
  const { params } = request;
  const result = await User.find(params);
  return response.json(result);
});

const SALT_ROUND = 10; // How many round of hashing do you want
userRouter.post('/new', async (request, response) => {
  const { body } = request;
  const { email, password, name } = body;
  const passowrdHashed = bcrypt.hashSync(password, SALT_ROUND);
  const result = await User.insertMany([{ email, password: passowrdHashed, name }]);
  const obfuscateField = omit(['password', '__v'], result);
  return response.json(obfuscateField);
});

module.exports = {
  userRouter,
};
