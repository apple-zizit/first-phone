'use strict';

/**
 * Get awesome things
 */
//  var data = [
//  {
//   name : 'item header',
//   info : 'item info',
//   awesomeness: 10
// }, {
//   name : 'AngularJS',
//   info : 'AngularJS is a toolset for building the framework most suited to your application development.',
//   awesomeness: 10
// }, {
//   name : 'Karma',
//   info : 'Spectacular Test Runner for JavaScript.',
//   awesomeness: 10
// }, {
//   name : 'Express',
//   info : 'Flexible and minimalist web application framework for node.js.',
//   awesomeness: 10
// }
// ];

var onlineUsers = [];
var messages = [];

exports.online_users = function(req, res) {
  res.json(onlineUsers);
};

exports.messages = function(req, res) {
  res.json(messages);
};

exports.register = function (req, res) {
 console.log("POST: /api/register");

  //var newRegister = req.param('name');  
  // var newOnline = {
  //   name : newRegister
  // };

  var registration = req.body;

  // don't add existing user

  for (var i = 0; i < onlineUsers.length; i++){
         //just replace the name
        if (!registration.previous && onlineUsers[i].name === registration.name) {
          res.statusCode = 304;
          return;
        }
        
        if (registration.previous && registration.previous !== registration.name && onlineUsers[i].name === registration.previous) {
          onlineUsers.splice(i, 1);
        }

  }
  
  onlineUsers.push({
    name: registration.name
  });

  res.statusCode = 200;
  res.send('OK');
};

exports.send_message = function (req, res) {
 console.log("POST: /api/send_message");

 console.log("----- message" + req.body);
  // var newMessage = {
  //   name : req.param('name'),
  //   message: req.param('message')
  // };

  messages.push(req.body);

  res.statusCode = 200;
  res.send('OK');
};
