const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const app = express();

app.use("/", express.static(__dirname + "/react-client/build"));

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('/react-client/build'));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'react-client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log("listening on port: ", port);
});

module.exports = app;
