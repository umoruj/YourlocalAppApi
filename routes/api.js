var express = require('express');
var router = express.Router();


var Episode = require('../models/episode');

Episode.methods(['get', 'put', 'post', 'delete']);
Episode.register(router, '/episodes');

module.exports = router;