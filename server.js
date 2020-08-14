'use strict';

const express = require('express');

// Ports - IP TBD after stage deploy, remember to change this back to 0.0.0.0 for commit.
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});


// Listener
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
