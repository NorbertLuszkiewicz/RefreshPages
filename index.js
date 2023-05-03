const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
  refreshPages(pagesToRefresh);
});

app.listen(port, () => {
  refreshPages(pagesToRefresh);
  console.log(`Server running`);
});
