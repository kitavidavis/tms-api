const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    username: {
        type: String
    },
    rooms: {
        type: Number
    },
}, {timestamps: true});

const House = module.exports = mongoose.model("houses", HouseSchema);

module.exports.createHouse = function(newHouse, cb){
    newHouse.save(cb);
}

module.exports.getHouseById = function(id, cb){
    House.findById(id, cb);
}

module.exports.getHouse = function(name, cb){
    var query = { name: name};
    House.findOne(query, cb);
}

module.exports.getAllHouses = function(username, cb){
    var query = { username: username };
    House.find(query, cb);
}

module.exports.getHouses = function(cb){
    House.find({}, cb);
}

module.exports.deleteHouse = function(id, cb){
    House.findByIdAndDelete(id, cb);
}