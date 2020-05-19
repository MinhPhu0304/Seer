const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
  citeKey: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: '',
  },
  journal: {
    type: String,
    default: '',
  },
  month: {
    type: String,
    default: '',
  },
  year: Number,
  volume: Number,
  number: Number,
  annote: String,
  pages: {
    type: String,
    default: '',
  },
  eprint: {
    type: String,
    default: '',
  },
  eprinttype: {
    type: String,
    default: '',
  },
  eprintclass: {
    type: String,
    default: '',
  },
  method: {
    type: [String],
  },
  methodlogy: [String],
  benefit: [String],
  participants: [String],
});

const articleModel = model('Article', articleSchema);
module.exports = {
  articleModel,
};
