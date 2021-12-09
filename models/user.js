const { Sequelize } = require("sequelize/dist");

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
        type: Sequalize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.beforeCreate((user, options) => {
    const salt = bcryt.genSaltSync();
    user.password = bcryt.hashSync(user.password, salt);
});
    