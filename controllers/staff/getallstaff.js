const Staff = require("../../models/staff");

async function getallstaff(req, res){
    try{
        const obj = req.body;

        Staff.getAllStaff(obj.username, function(err, staff){
            if(err){
                throw err;
            }

            return res.status(200).send({data: staff});
        })
    } catch(error){
        return res.status(200).send(error);
    }
}

module.exports = getallstaff;