const mongoose = require('mongoose');

const UnitSchema = mongoose.Schema({
    house: {
        type: String
    },
    username: {
        type: String
    },
    rent: {
        type: Number
    },
    water: {
        type: Boolean,
        default: false
    },
    waterCost: {
        type: Number
    },
    garbage: {
        type: Boolean,
        default: false
    },
    garbageCost: {
        type: Number
    },
    roomNumber: {
        type: Number
    }
});

const Units = module.exports = mongoose.model("units", UnitSchema);

module.exports.createUnit = function(newUnit, cb) {
    newUnit.save(cb);
}

module.exports.getUnitsByUsername = function(username, cb){
    var query = { username: username};
    Units.find(query, cb);
}

module.exports.getUnitsForHouse = function(house, cb){
    var query = { house: house };
    Units.find(query, cb);
}