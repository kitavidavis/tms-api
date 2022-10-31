const House = require("../../models/properties");

async function gethouse(req, res){
    try {
        const obj = req.body;

        House.getHouseById(obj.id, function(err, house){
            if(err){
                throw err;
            }

            return res.status(200).send({data: house});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = gethouse;