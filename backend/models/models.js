const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

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
  JoinDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
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

const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  PointsAwarded: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

const Transaction = sequelize.define('Transaction', {
  TransactionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  TotalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  PointsEarned: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

const Reward = sequelize.define('Reward', {
  RewardID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PointCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

const CustomerReward = sequelize.define('CustomerReward', {
  CustomerRewardID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  RedemptionDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

const Campaign = sequelize.define('Campaign', {
  CampaignID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  StartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  BonusPoints: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  TargetedTiers: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const TransactionItem = sequelize.define('TransactionItem', {
  TransactionItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  QuantityPurchased: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

const Survey = sequelize.define('Survey', {
  SurveyID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  StartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  PointsAwarded: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const CustomerSurvey = sequelize.define('CustomerSurvey', {
  CustomerSurveyID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CompletionDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = {
  Customer,
  Product,
  Transaction,
  Reward,
  CustomerReward,
  Campaign,
  TransactionItem,
  Survey,
  CustomerSurvey
  
};
