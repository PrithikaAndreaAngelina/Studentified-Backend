const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname, 'hackregister-duplicate.html'));
});
app.get('/dashboard', function(req, res) {
   res.session.reg=req.query.user
  res.sendFile(path.join(__dirname, 'third.html'));
});
app.get('/dashboard', function(req, res) {
   res.session.reg=req.query.user
  res.sendFile(path.join(__dirname, 'review.html'));
});
app.use('/', express.static(__dirname))
app.listen(port);
console.log('Server started at http://localhost:' + port);
