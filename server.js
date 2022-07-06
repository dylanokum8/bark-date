
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const passport = require('passport');
const PORT = process.env.PORT || 3006;
const sequelize = require('./config/connection');



















// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
