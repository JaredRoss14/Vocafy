// Pull in Environment variables
require('dotenv').config();

// Load in necessary dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const expressValidator = require("express-validator");
const PORT = process.env.PORT || 3001;
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');

// Set up morgan
app.use(morgan('dev'));

// Set Up Passport
const passport = require("passport");
require('./config/passport')(passport); 

// Serve Static Assets
app.use(express.static("client/build"));
app.use(cookieParser());

// Configure Body Parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Express Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {secure: false },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.use(passport.initialize());
app.use(passport.session());

//Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    const namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;
    
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Connect Flash
app.use(flash());
// Flash Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

require('./routes/authentication')(app, passport);

// Configure Routes
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vocafy",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`Now listening on PORT ${PORT}!`)
});
