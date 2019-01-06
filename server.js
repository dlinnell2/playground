const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 5000;

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/example");

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
  // Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));