const express = require('express');
const bcrypt = require('bcrypt');
const { omit } = require('ramda');

const { User } = require('../model');

const userRouter = express.Router();

// Root router url which is URL/api/user
userRouter.post('/', async (request, response) => {
  const { body } = request;
  const result = await User.find({ email: body.email });
  if (result.length === 0) {
    return response.sendStatus(404);
  }
  if (bcrypt.compareSync(body.password, result[0].password)) {
    return response.json(omit(['password', '__v'], result[0].toJSON()));
  }
  return response.sendStatus(403);
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
