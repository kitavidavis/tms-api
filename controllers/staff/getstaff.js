const Staff = require("../../models/staff");

async function getstaff(req, res){
    try {
        const obj = req.body;

        Staff.getStaffById(obj.id, function(err, staff){
            if(err){
                throw err;
            }

            return res.status(200).send({data: staff});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getstaff;