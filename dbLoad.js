require('dotenv').config();

const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Article } = require('./model');

const bibtex = fs.readFileSync('./data.bib', 'utf8');
const result = bibtexParse.parse(bibtex);

const insertData = result.reduce((acc, currentValue) => {
  if (currentValue.itemtype === 'comment') return acc;
  const firstValue = {
    citeKey: currentValue.key,
  };
  const article = currentValue.fields.reduce((articleValue, { name, value }) => ({
    ...articleValue,
    [name]: value.replace('{', '').replace('}', '').replace('\n', ''),
  }), firstValue);
  return [...acc, {
    ...article,
    method: ['TDD', 'XP'],
    methodlogy: 'Agile',
    benefit: ['Improve code quality', 'Performance'],
  }];
}, []);
Article.insertMany(insertData).then((resultInsert) => {
  // eslint-disable-next-line no-console
  console.log(resultInsert);
}).catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
});
