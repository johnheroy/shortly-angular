var express = require('express');
var partials = require('express-partials');
var util = require('./lib/utility');

/* START SOLUTION */
var handler = require('./lib/request-handler.solution');
/* ELSE
var handler = require('./lib/request-handler');
END SOLUTION */

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/../public'));
  app.use(express.cookieParser('shhhh, very secret'));
  app.use(express.session());
  app.use(app.router);
});

// app.get('/create',  handler.renderIndex);

app.get('/links',  handler.fetchLinks);
app.post('/links', handler.saveLink);

// app.post('/login', handler.loginUser);
// app.get('/logout', handler.logoutUser);

// app.post('/signup', handler.signupUser);

app.get('/*', handler.navToLink);

module.exports = app;
