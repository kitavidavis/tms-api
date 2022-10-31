const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const StaffSchema = mongoose.Schema({
    fullname: {
        type: String
    },
    idnumber: {
        type: Number,
        index: true
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    house: {
        type: String //id of the house
    },
    salary: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true});

const Staff = module.exports = mongoose.model("staff", StaffSchema);

module.exports.createStaff = function(newStaff, cb){
    bcrypt.genSalt(10, function(err, salt) {
        if(err){
            throw err;
        }
        bcrypt.hash(newStaff.password, salt, function(err, hash) {
            if(err){
                throw err;
            }

            newStaff.password = hash;
            newStaff.save(cb);
        })
    })
}

module.exports.getStaff = function(idnumber, cb){
    var query = { idnumber: idnumber };
    Staff.findOne(query, cb);
}

module.exports.getStaffById = function(id, cb){
    Staff.findById(id, cb);
}

module.exports.getAllStaff = function(username, cb){
    var query = { username: username };
    Staff.find(query, cb);
}

module.exports.deleteStaff = function(id, cb){
    Staff.findByIdAndDelete(id, cb);
}