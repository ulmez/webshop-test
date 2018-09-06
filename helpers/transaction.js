var mongoose = require('mongoose');
mongoose.connect("mongodb://superman:thebest1@ds123012.mlab.com:23012/webshop", { useNewUrlParser: true });
var Fawn = require("fawn");
Fawn.init(mongoose);

module.exports.fawnTask = function() {
    return Fawn.Task();
}