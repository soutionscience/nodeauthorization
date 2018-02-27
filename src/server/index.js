const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const expressApp = require('./create-express-app')
const router = require('./api-router')
require('dotenv').config();



MongoClient.connect(process.env.DB_CONN, (err, db) => {

  console.log('connected to mongodb...');
 expressApp(db)
 .listen(3000, () => {
    database = db;
    console.log('listening on port 3000...');
  });

});
