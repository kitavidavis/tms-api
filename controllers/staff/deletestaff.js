const Staff = require("../../models/staff");

async function deletestaff(req, res){
    try {
        const obj = req.body;

        Staff.getStaffById(obj.id, function(err, staff){
            if(err){
                throw err;
            }

            if(staff){
                Staff.deleteStaff(obj.id, function(err){
                    if(err){
                        throw err;
                    }

                    return res.status(200).send({message: `Staff deleted successfully`});
                })
            } else {
                return res.status(400).send({message: "Staff does not exist!"});
            }
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = deletestaff;