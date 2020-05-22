require('dotenv').config();

const Express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { Article } = require('./model');

const server = Express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(Express.static(`${__dirname}/frontend/build`));

Mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Mongoose.connection.on('error', (err) => {
  console.error(err); // eslint-disable-line no-console
});

Mongoose.connection.on('connected', () => {
  console.log('Mongo DB is connected'); // eslint-disable-line no-console
});

server.get('/', (_, response) => response.sendFile('index.html'));

server.get('/search', async (request, response) => {
  const searchResult = await searchArticleFrom(request);
  response.json(searchResult);
});

async function searchArticleFrom(request) {
  const dbQuery = constructArticleQuery(request.query);
  const queryResult = await Article.find(dbQuery).catch((e) => console.error(e));
  return queryResult;
}

function constructArticleQuery(requestQuery) {
  const FIELD = ['method', 'methodlogy', 'benefit', 'participants'];
  return Object.keys(requestQuery).reduce((acc, value) => {
    if (FIELD.includes(value)) {
      return {
        ...acc,
        [value]: {
          $all: requestQuery[value].split(','),
        },
      };
    }
    return {
      ...acc,
      [value]: requestQuery[value],
    };
  }, {});
}

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
