// Load in necessary dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./server/routes"); //Video suggested changing to index
const app = express();
const PORT = process.env.PORT || 3001;

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport Init
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

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Load static assets
app.use(express.static("client/build"));
// Add routes, API and view
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
