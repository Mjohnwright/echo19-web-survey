const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const getDb = require('./models');

const db = getDb();

console.log(db);

console.log(db.sequelize);
// bodyParser to translate urlform and json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes and give the server access to them.
require('./controllers/api.js')(app);

// handlebars rout to static files - css, img
app.use(express.static('public'));

// initiate database and start express server
db.sequelize.sync()
  .then(() => {
    console.log('database sync okay');
    app.listen(PORT, (err) => {
      if (!err) {
        // Log (server-side) when our server has started
        console.log(`Server listening on: http://localhost: ${PORT}`);
      } else {
        console.log(err);
      }
    });
  }).catch((err) => {
    console.log(err, 'database synch failed');
  });