var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var authRouter = require('./routes/auth');
var themesRouter = require('./routes/themes');

//cors 
var cors = require('cors')
//create DB Uber
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://lego_user:L2At1JngbBUu8Vs6@lego.zv7kt.mongodb.net/Lego?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true})

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/themes', themesRouter);


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
