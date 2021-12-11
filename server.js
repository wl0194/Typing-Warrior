const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require('path');
const app = express();
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// express middlewar:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Create batabase connection:

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening ay"));
});
