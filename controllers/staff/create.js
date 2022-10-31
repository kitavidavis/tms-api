const Staff = require("../../models/staff");

async function create(req, res){
    try {
        const obj = req.body;

        Staff.getStaff(obj.idnumber, function(err, user){
            if(err){
                throw err;
            }

            if(user){
                return res.status(400).send({message: "user exists"});

            } else {
                Staff.createStaff(new Staff(obj), function(err, staff){
                    if(err){
                        throw err;
                    }

                    return res.status(200).send({message: "success", data: staff})
                })
            }
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = create;