const { Schema } = require('mongoose');

const user = new Schema({
  email: String, // used for log in
  password: String,
  name: String,
  role: [String], // ["admin", "analyzer", "submitter", "searcher"]
  submittedArticles: [{
    type: Schema.Types.ObjectId,
    ref: 'articles',
  }],
  reviewingArticles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'articles',
    },
  ], // Could be empty
  savedSearchs: [String],
});

module.exports = {
  user,
};
