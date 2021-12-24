var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;



