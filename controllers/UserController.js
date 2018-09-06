var User = require('../models/User');
var Person = require('../models/Person');
var task = require('../helpers/transaction').fawnTask();
//var mongoose = require('mongoose');
//mongoose.connect("mongodb://superman:thebest1@ds123012.mlab.com:23012/webshop");
//var Fawn = require("fawn");
//Fawn.init(mongoose);
//var userSchema = require('../models/User').userSchema;

module.exports.all_users = function(req, res, next) {
    User.find()
        .then(function(data) {
            res.json(data);
        });
}

module.exports.one_user = function(req, res, next) {
    var id = req.params.id;
    User.findById(id)
        .then(function(data) {
            res.json(data);
        });
}

module.exports.add_user = function(req, res, next) {
    var itemUser = {
        username: req.body.username,
        password: req.body.password
    };

    var itemPerson = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        social_security_number: req.body.social_security_number,
        address: req.body.address,
        postal_code: req.body.postal_code,
        phone_home: req.body.phone_home,
        phone_mobile: req.body.phone_mobile,
        email: req.body.email,
        user_id: {$ojFuture: "0._id"}
    };

    //var task = Fawn.Task();

    //var Cars = mongoose.model("cars", new Schema({make: String, year: Number}));
    //var toyota = new Cars({make: "Toyota", year: 2015});

    //var userSchema = require('../models/User').userSchema;

    task/*.initModel("user", userSchema)*/
    .save(User, itemUser)
    .save(Person, itemPerson)
    .run({useMongoose: true})
    .then(function(results){
        res.json({
            message: results
        });
    })
    .catch(function(err) {
        res.json({
            message: err
        });
    });

    /*task.save("User", {username: "user1", password: "one"}).
    run().
    then(function(results) {
        res.json({
            message: results
        });
    }).
    catch(function(err) {
        res.json({
            message: err
        });
    });*/

    /*var item = {
        username: req.body.username,
        password: req.body.password
    };

    var newUser = new User(item);
    newUser.save();

    res.json("You successfully saved the data");*/
}

module.exports.update_user = function(req, res, next) {
    var id = req.params.id;

    var item = {
        username: req.body.username,
        password: req.body.password
    };

    User.findOneAndUpdate(id, { $set: item }, function(err, result) {
        if(err) {
            return res.json({
                message: err
            });
        }

        res.json({
            message: result
        });
    });
}

module.exports.delete_user = function(req, res, next) {
    var id = req.params.id;

    User.findOneAndRemove(id)
        .exec()
        .then(function(result) {
            res.json({
                message: result
            });
        })
        .catch(function(err) {
            res.json({
                message: err
            });
        });
}