var mongoose = require('mongoose');
mongoose.connect('mongodb://superman:thebest1@ds123012.mlab.com:23012/webshop', { useNewUrlParser: true });
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
}, {collection: 'user'});

var User = mongoose.model('User', userSchema);

module.exports = User;