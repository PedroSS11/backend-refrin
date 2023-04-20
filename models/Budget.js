import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/conn.js";
import User from "../models/User";

const Budget = sequelize.define("Budget", {
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

Budget.belongsTo(User, { foreignKey: "userId" });

module.exports = Budget;
