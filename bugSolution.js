const http = require('http');

const server = http.createServer((req, res) => {
  const doSomethingAsync = () => {
    setTimeout(() => {
      try {
        if (Math.random() < 0.5) {
          throw new Error('Something went wrong!');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Hello, World!');
        }
      } catch (error) {
        console.error('Error during asynchronous operation:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    }, 1000);
  };

  doSomethingAsync();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});