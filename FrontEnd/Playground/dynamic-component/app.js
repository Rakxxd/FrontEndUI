const restify = require('restify');
const server = restify.createServer();
const products = require('./products');

const io = require('socket.io')(server.server);
let sockets = new Set();

const corsMiddleware = require('restify-cors-middleware');
const port = 3005;

const cors = corsMiddleware({
  origins: ['*'],
});

server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

io.on('connection', socket => {
  sockets.add(socket);
  socket.emit('data', { data: products });
  socket.on('clientData', data => console.log(data));
  socket.on('disconnect', () => sockets.delete(socket));
});

server.get('/', (request, response, next) => {
  response.json(products);
  next();
});

server.post('/api/products', (request, response) => {
  const product = request.body;
  products.push(product);
  for (const socket of sockets) {
    console.log(`Emitting value: ${products}`);
    socket.emit('data', { data: products });
  }
  response.json(products);
});
server.listen(port, () => console.info(`Server is up on ${port}.`));