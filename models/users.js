var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// user schema,
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    phonenumber: {
        type: String
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    },
    suspended: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'tenant', 'employee', 'fundi'],
        default: 'user',
    },
    verified: {
        type: Boolean,
        default: false
    },
    premium: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

var User = module.exports = mongoose.model('users', UserSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash;
            newUser.save(callback); 
        });
    });
};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByUsername = function(username, callback){
    var query = { username: username};
    User.findOne(query, callback);
}

module.exports.getTenants = function(cb){
    var query = {role: "tenant"};
    User.find(query, cb);
}

module.exports.getAllUsers = function(callback) {
    User.find({}, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}