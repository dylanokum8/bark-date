
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require('passport');
const sequelize = require('./config/connection');
const routes = require('./controllers')



const app = express();
const PORT = process.env.PORT || 3006;

const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');













app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(
  () => {
app.listen(PORT, () => 
    console.log(`App listening on port ${PORT}!`));
  });
