const http = require("http");
const fetch = require("node-fetch");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(PORT, hostname, () => {
  refreshPages(pagesToRefresh);
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

const pagesToRefresh = ["https://dynamix-bot.glitch.me"];
const refreshTime = 3 * 60 * 1000;

const refreshPages = urls => {
  urls.forEach(url => {
    console.log(`Start refreshowania`);
    sendRequest(url);
    setInterval(() => sendRequest(url), refreshTime);
  });
};

const sendRequest = url => {
  console.log(`kolejny refresh`);
  fetch(url).then(res => console.log(res, "poszedł get na url"));
};

refreshPages(pagesToRefresh);
