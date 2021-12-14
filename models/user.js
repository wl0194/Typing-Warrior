const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// // set up User table
class User extends Model {}
// const User = sequalize.define('users', {
//     id: {
//         type: Sequelize.INTERGER,
//         unique: true,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     username: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// User.beforeCreate((user, options) => {
//     // This doesn't allow a user to crack/calculate other users passwords
//     const salt = bcrypt.genSaltSync();
//     user.password = bcryt.hashSync(user.password, salt);
// });

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
    
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
User.beforeCreate((user, options) => {
    // This doesn't allow a user to crack/calculate other users passwords
    const salt = bcrypt.genSaltSync();
    user.password = bcryt.hashSync(user.password, salt);
});
  

module.exports = User;