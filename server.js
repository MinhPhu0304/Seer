const Express = require('express');
const bodyParser = require('body-parser');

const server = Express();
server.use(bodyParser.json());
server.use(Express.static(`${__dirname}/frontend/build`));

const PORT = process.env.PORT || 5000;

server.get('/', (_, response) => response.sendFile('index.html'));

server.get('/search', (request, response) => {
  // TODO: implement this
  response.status(200);
});

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
