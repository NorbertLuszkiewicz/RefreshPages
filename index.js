const http = require("http");
const fetch = require("node-fetch");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  refreshPages(pagesToRefresh);
  console.log(`Server running at http://${hostname}:${port}/`);
});

const pagesToRefresh = ["https://dynamix-bot.glitch.me"];
const refreshTime = 3 * 60 * 1000;

const refreshPages = urls => {
  urls.forEach(url => {
    sendRequest(url);
    setInterval(() => sendRequest(url), refreshTime);
  });
};

const sendRequest = url => {
  fetch(url).then(res => console.log(res, "dd"));
};

refreshPages(pagesToRefresh);
