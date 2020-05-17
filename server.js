const Express = require('express');
const bodyParser = require('body-parser');

const server = Express();
server.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

server.get('/search', (request, response) => {
    // TODO: implement this
    response.status(200)
})

server.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}`));
