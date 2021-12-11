const { Sequelize } = require("sequelize/dist");
const bcrypt = require('bcrypt');

// set up User table
const User = sequalize.define('users', {
    id: {
        type: Sequelize.INTERGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.beforeCreate((user, options) => {
    // This doesn't allow a user to crack/calculate other users passwords
    const salt = bcrypt.genSaltSync();
    user.password = bcryt.hashSync(user.password, salt);
});

module.exports = User;