const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

module.exports = {
  db
}