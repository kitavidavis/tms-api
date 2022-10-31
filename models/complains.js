const mongoose = require("mongoose");

const ComplainsSchema = mongoose.Schema({
    username: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    }
}, {timestamps: true});

const Complain = module.exports = mongoose.model("complains", ComplainsSchema);

module.exports.createComplain = function(newComplain, cb){
    newComplain.save(cb);
}

module.exports.getComplain = function(id, cb){
    Complain.findById(id, cb);
}

module.exports.getComplains = function(username, cb){
    var query = { username: username };
    Complain.find(query, cb);
}

module.exports.deleteComplain = function(id, cb){
    Complain.findByIdAndDelete(id, cb);
}