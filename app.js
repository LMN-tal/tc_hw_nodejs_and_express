const express = require('express');
const bodyParser = require('body-parser');
// const logger = require('morgan');

const api = require('./routes');
const app = express();


const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const dev_db_url = 'mongodb://localhost/tc-nodejs-homework';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// API /api
// GET POST /api/todos
// DELETE, PUT /api/todos/:id
app.use('/api', api);
require('./config/error-handler')(app)

// validate with joi

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
