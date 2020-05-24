require('dotenv').config();

const Express = require('express');
const bodyParser = require('body-parser');

const { searchRouter } = require('./routes');
const { connectToDB } = require('./dbConnection');

connectToDB();
const server = Express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(Express.static(`${__dirname}/frontend/build`));

server.get('/', (_, response) => response.sendFile('index.html'));
server.use('/search', searchRouter);

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
