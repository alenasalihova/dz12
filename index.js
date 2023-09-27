const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.all('*', (req, res) => {
    res.status(404).send("<h2>Page not found </h2>");
});
app.listen(8000, () => {
    console.log('Example app listening on port 8000');
  });
  
