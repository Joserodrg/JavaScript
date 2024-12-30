// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  console.log({ method: req.method, url: req.url });

  if (req.method === 'GET' && req.url === '/hello') {
    res.end('Hello World!\n');
    return;
  }

  res.end();
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});