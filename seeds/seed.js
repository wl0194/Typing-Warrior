const sequelize = require("../config/connection");
const { Quote } = require("../models");

const quoteData = require("./quoteData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  for (const quote of quoteData) {
    await Quote.create({
      ...quote,
    });
  }

  process.exit(0);
};

seedDatabase();
