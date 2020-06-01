const { Schema, model } = require('mongoose');

const user = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
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
