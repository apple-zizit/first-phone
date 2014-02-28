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

exports.online_users = function(req, res) {
  res.json(onlineUsers);
};

exports.register = function (req, res) {
 console.log("POST: /api/update_value");
  // res.header('Access-Control-Allow-Origin', req.headers.origin);
  
    var newRegister = req.param('name');  
  //  console.info("name is " + item);

  // var newItem = {
  //   item: req.body.item
  // };

  var newOnline = {
    name : newRegister
  };

   onlineUsers.push(newOnline);

  //   res.statusCode = 200
  res.send('get the hell out of here');
};
