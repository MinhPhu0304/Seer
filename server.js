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

server.get('/', (_, response) => response.sendFile('index.html'));

server.get('/search', async (request, response) => {
  const searchResult = await searchArticleFrom(request);
  response.json(searchResult);
});

// TODO: implement search with params
async function searchArticleFrom(request) {
  const queryResult = await Article.find();
  return queryResult;
}

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
