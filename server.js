const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// express middlewar:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Create batabase connection:

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening ay"));
});
