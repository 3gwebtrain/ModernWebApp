var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/social', function(){
	console.log('mongoose connected');
});

module.exports = mongoose;