const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const secrets = require('../keys.js');

const env = process.env.NODE_ENV || 'dev';

const config = require(path.join(__dirname, '/../config/config.json'))[env];

const basename = path.basename(__filename);
const db = {};
const secretName = 'apacheWeb-chaos.echo19.com';

const initDb = (secretString) => {
  const secretJSON = JSON.parse(secretString);
  // console.log(secretJSON);

  const sequelize = new Sequelize(secretJSON.dbname, secretJSON.username, secretJSON.password, secretJSON);

  fs
    .readdirSync(__dirname)
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
};

secrets.getSecretString(secretName, initDb);
