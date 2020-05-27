const { articleModel } = require('./article');
const { userModel } = require('./user');

module.exports = {
  Article: articleModel,
  User: userModel,
};
