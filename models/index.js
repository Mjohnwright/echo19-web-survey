const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const secrets = require('../keys.js');

const basename = path.basename(__filename);
const db = {};
const secretName = 'chaos-rw-chaos.echo19.com';

const initDb = (secretString) => {
  const secretJSON = JSON.parse(secretString);

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
  
  
  console.log(db);
  module.exports = db;
};

secrets.getSecretString(secretName, initDb);
