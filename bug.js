const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const doSomethingAsync = () => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        // Simulate a random error
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      }
    }, 1000); 
  };

  doSomethingAsync();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});