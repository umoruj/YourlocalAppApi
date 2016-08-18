var restful = require('node-restful');
var mongoose = restful.mongoose;

var episodeSchema = new mongoose.Schema({
	name: String,
	season: String,
	number: String,
	airdate: String,
	airtime: String,
	image: String
	
});


module.exports = restful.model('Episodes', episodeSchema);