//修改日期0821
const http = require("http");
const hostname = "localhost"; // 127.0.0.1
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world!");
});

server.listen(port, hostname, () => {
  console.log(`1st node.js server running on http://${hostname}:${port}`);
});
