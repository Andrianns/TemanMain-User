const sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const { DATABASE_URL, PGDATABASE, PGPASSWORD, PGUSER } = process.env;

const db = new sequelize(DATABASE_URL, {
  define: {
    timestamps: false,
  },
});

module.exports = db;
