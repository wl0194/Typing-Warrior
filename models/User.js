const {Model, DataTypes}= require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// set up User table
const User = sequelize.define('users', {
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
  },

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
                    isEmail: true
                }

            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len:[8]
                },
            },
      },
      {
          sequelize,
          timestamps: true,
          freezeTableName: true,
          underscored: true,
          modelName: 'user'
      }
    )
)

  module.exports = User;