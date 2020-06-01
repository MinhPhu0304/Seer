require('dotenv').config();

const Express = require('express');
const bodyParser = require('body-parser');

const { searchRouter, userRouter } = require('./routes');
const { connectToDB } = require('./dbConnection');

connectToDB();
const server = Express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(Express.static(`${__dirname}/frontend/build`));

server.use('/api/search', searchRouter);
server.use('/api/user', userRouter);
server.get('*', (req, res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`);
});

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
