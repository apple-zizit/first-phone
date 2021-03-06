'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/online', api.online_users);
  console.log("before post");
  app.post('/api/register', api.register);

 app.get('/api/messages', api.messages);
  console.log("before post");
  app.post('/api/send_message', api.send_message);

  //All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};