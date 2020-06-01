const { Schema, model } = require('mongoose');

const user = new Schema({
  email: String, // used for log in
  password: String,
  name: String,
  role: {
    type: [String],
    enum: ['admin', 'analyzer', 'submitter', 'searcher'],
    default: ['searcher'],
  }, // ["admin", "analyzer", "submitter", "searcher"]
  submittedArticles: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'articles',
    }],
    default: [],
  },
  reviewingArticles: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'articles',
      },
    ],
    default: [],
  }, // Could be empty
  savedSearchs: {
    type: [String],
    default: [],
  },
});

const userModel = model('user', user);
module.exports = {
  userModel,
};
