const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
//const todos = require('./routes/todosRoutes');

const app = express();

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// Uncomment for static HTML
//app.use(express.static(__dirname + '/public-static-html'));

// Uncomment for create-react-app...app
//app.use(express.static(__dirname + '/public-cra/build/'));



//app.use("/public", express.static(__dirname + "/public-static-html/"));
app.use("/", express.static(__dirname + "/public-cra/build/"));



app.use(logger('dev'));

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', index);
//app.use('/todos', todos);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
