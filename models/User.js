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



  module.exports = User)