var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://umoru80:aikwatiame@ds161295.mlab.com:61295/yourlocalapp');


var app = express();

app.set('json spaces', 4);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

var port = Number(process.env.PORT || 3000);

app.listen(port);
console.log('API is working on port 3000');