
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');



















// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
