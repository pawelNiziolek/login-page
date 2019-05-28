const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

//bodyparser for middleware
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// DB config
const db = require('./config/key').mongoURI;

//connect to mongoDB
mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(console.log('MongoDB succesfully connected'))
  .catch(error => console.log(error));

const port = process.env.PORT || 5000 //for Heroku port

app.listen(port, () => console.log(`server is running on port ${port}, running all the time :)`))