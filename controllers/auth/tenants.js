const User = require("../../models/users");

async function getTenants(req, res){
    try{
        User.getTenants(function(err, tenants){
            if(err){
                throw err;
            }

            return res.status(200).send({data: tenants});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getTenants;