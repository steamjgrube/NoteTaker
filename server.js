const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, function() {
  console.log(`Open your web-browser and direct to localhost:${PORT}`);
});