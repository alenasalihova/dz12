const express = require("express");
const path = require("path");

const app = express();

//app.use(express.static("public"));
app.get ('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
});
app.get ('/about.html', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/about.html'));
});
app.get ('/style.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/style.css'));
});
app.get ('/style1.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/style1.css'));
});
app.get ('/306165878.jpg', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/306165878.jpg'));
});
app.get ('/kandinsky.jpeg', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/kandinsky.jpeg'));
});
app.all('*', (req, res) => {
    res.status(404).send("<h2>Page not found </h2>");
});
app.listen(8000, () => {
    console.log('Example app listening on port 8000');
  });
  

 