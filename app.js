/*
File Name: app.js
Student's Name: Yang Qi
Student ID: 301263107
Date: 09/28/2023
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 3000;

// EJS setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

