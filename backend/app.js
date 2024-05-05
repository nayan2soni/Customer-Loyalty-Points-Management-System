const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
require('dotenv').config();
const mysql = require('mysql');
const sequelize = require('../config/sequelize.js'); // Assuming this is where you define your Sequelize instance
const customerRoutes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve the index.html file for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define Sequelize models and routes here

const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LoyaltyTier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TotalPoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

// Define routes
app.post('/customer/register', async (req, res) => {
  try {
    const { Name, Email, Phone, Address, LoyaltyTier } = req.body;
    const newCustomer = await Customer.create({
      Name,
      Email,
      Phone,
      Address,
      LoyaltyTier,
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
