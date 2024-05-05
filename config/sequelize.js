const { Sequelize } = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);


// Initialize Sequelize with environment variables
const sequelize = new Sequelize('clp','root','toor', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
